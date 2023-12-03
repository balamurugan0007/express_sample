const express =require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const {v4:uuidv4}=require('uuid')



const Usermodel=require('./models/models')
const bodyParser = require('body-parser')

let DBURL="mongodb+srv://balamurugan:spidy@cluster0.wbdimgt.mongodb.net/?retryWrites=true&w=majority";

const app=express()


app.use(bodyParser.json())


app.listen(5000,()=>{
    console.log("Server running in port 5000...")
})




let params= {useNewUrlParser: true, 
         useUnifiedTopology: true    }


mongoose.connect(DBURL,params).then(()=>{
    console.log('DB connected suceessfully ....')
}).catch((err)=>{
    console.log(err)
})


var user_id=uuidv4();

app.post('/user',(req,res)=>{
 

    var User= new Usermodel();
    User.name=req.body.name;
    User.age=req.body.age;
    User.city=req.body.city;
    User.phone=req.body.phone;
    User.id=user_id;

    User.save().then((e)=>{
        console.log("created suceesfully")
        res.send(e)
    }).catch((err)=>{

        console.log(err)
    })

})

app.get("/info",(req,res)=>{
    Usermodel.find().then((data)=>{
        console.log(data)
        res.send({"data":data})
    }).catch((err)=>{
        console.log(err)
        res.send({"err":err})
    })
})


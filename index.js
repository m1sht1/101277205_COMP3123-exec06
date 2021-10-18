let express = require('express');
let mongoose = require('mongoose');
let StudentModel = require('./models/Student');
let app = express()

mongoose.connect("mongodb+srv://ss:Gbc1234@cluster0.iksxy.mongodb.net/f2021_comp3123?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
useUnifiedTopology:true
})
app.get("/", (req, res)=>
{
    res.send("<h1>MongoDB mongoose example")
})
//insert new syudent
app.get("/add", async(req, res)=>
{
    let s={
        first_name: "Sanjana",
        last_name:"Sharmin",
        total:100
    }
    let new_student = new StudentModel(s)
    try{
       await new_student.save(s)
        console.log("Student Record Saved")
        res.status(200).send("Student Record Saved")
    }catch(err){
        console.log("Error:Student Record Saved" +err)
        res.status(500).send(err)
    }
    
})
app.get("/students", async(req,res)=>{
    const s= await StudentModel.find({})
    try{
        res.send(s)
    }catch(err){
        console.log("Error:"+err)
        res.status(500).send(err)
    }
    })
    app.get("/students", async(req,res)=>{
        //const s= await StudentModel.find({})
        //const s= await StudentModel.find({}, "first_name total")
        const s= await StudentModel.find({}, "first_name total")
        try{
            res.send(s)
        }catch(err){
            console.log("Error:"+err)
            res.status(500).send(err)
        }
})
app.listen(8089, ()=>{
    console.log("server is running at http://localhost:8089")
})
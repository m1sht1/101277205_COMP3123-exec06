let mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    first_name: String,
last_name:{
    type: String,
    required: true,
    trim :true,
    lowercase: true
},
total:{
    type: Number,
    default:0.0,
    validate(v){
        if(v<0) throw new Error(" Total marks can't")
    }
    
}
})
const Student = mongoose.model("students", StudentSchema)
module.exports = Student

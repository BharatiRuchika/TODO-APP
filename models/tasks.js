let mongoose = require("mongoose")

// task schema is defined here
const taskSchema = new mongoose.Schema({
    taskDesc:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default: () => 'No deadline'
    },
    category:{
        type:String,
        required:true
    },
})

const Task = mongoose.model('Tasks',taskSchema)
module.exports = Task
const db = require("../config/mongoose")
const Task = require("../models/tasks")

// create task function implementation
module.exports.createTask = function(req,res){
    // if date is not selected then date would be No deadline
    if (req.body.date==''){
        req.body.date = 'No Deadline'
    }
    //query fro creating a task
    Task.create(req.body).then((data)=>{
        return res.redirect("/")
    }).catch(error => {
        console.error('An error occurred:', error._message);
        return res.redirect("/")
    });    
}

// delete task function implementation
module.exports.deleteTask = function(req,res){
    console.log("id",req.params.id)
    var ids = req.params.id
    var arr = ids.split(",")
    console.log("arr",arr)
    //query for deleting tasks
    for (id of arr){
        Task.deleteOne({_id:id}).then(()=>{
        console.log("deleted successfully")
        }).catch(error => {
            console.error('An error occurred:', error);
        });
    }
    return res.redirect("/")
}

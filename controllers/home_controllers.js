const Task = require("../models/tasks")

// home page is rendered here
module.exports.displayPage = function(req,res){
    var tasks;

    //query for getting all the tasks
    const Tasks = Task.find({}).then((data)=>{
        return res.render('home',{
            title:"Home",
            tasks:data
        })
    }).catch((err)=>{
        console.log(err)
    })
    
    
}
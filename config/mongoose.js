// connected to database here
const mongoose = require("mongoose")
// tasks_list_db name is given to database 
mongoose.connect("mongodb://localhost/tasks_list_db")
const db = mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to db"))
db.once('open',function(){
    console.log('successfully connected to the database')
})
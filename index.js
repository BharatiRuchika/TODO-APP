//express nodejs framework is used
const express = require('express');
const PORT = 8000
const app = express()

//middleware
app.use(express.urlencoded());

// ejs as the view engine is used
app.set('view engine','ejs')

//all views are in the views folder
app.set('views',"./views")
app.use(express.static(__dirname + '/assets'));

//all routing is done in routes folder
app.use("/",require("./routes"))
console.log(__dirname)

//server started on port 8000
app.listen(PORT,function(){
    console.log(`server started at port ${PORT}`)
})
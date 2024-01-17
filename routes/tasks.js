// all tasks relatsed routing is handled here
const express = require("express");
const router = express.Router()
const taskController = require("../controllers/task_controller")
router.post("/createTask",taskController.createTask)
router.get("/deleteTask/:id",taskController.deleteTask)
module.exports = router
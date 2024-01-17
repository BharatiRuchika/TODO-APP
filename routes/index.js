const express = require("express")
const router = express.Router()
const home_controller = require("../controllers/home_controllers")
router.get("/",home_controller.displayPage)
router.use("/task",require("./tasks"))
module.exports = router
const express = require("express")
const router = express.Router()

const upload = require("../config/multer")

const ImgController = require("../controller/ImgController")

router.post("/", upload.single("file"), ImgController.create)

module.exports = router
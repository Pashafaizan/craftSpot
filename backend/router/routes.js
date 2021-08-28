const express = require("express");
const router = express.Router();
const uplaodController = require("../app/controller/uploadFile");
const userController = require("../app/controller/productController");

router.post("/form", userController.createForm);
router.post("/upload", uplaodController.fileUpload);
router.get("/list", userController.getList);
router.post("/mail", userController.sendMail);
router.get("/product", userController.getProduct);

module.exports = router;

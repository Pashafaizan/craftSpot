const express = require("express");
const router = express.Router();
const uplaodController = require("../app/controller/uploadFile");
const userController = require("../app/controller/productController");
const {sellerSignup,sellerLogin} = require("../app/controller/marchandiserController")
router.post("/form", userController.createForm);
router.post("/upload", uplaodController.fileUpload);
router.get("/list", userController.getList);
router.post("/mail", userController.sendMail);
router.get("/product", userController.getProduct);
router.post("/seller/signup",sellerSignup);
router.post("/seller/login",sellerLogin);


module.exports = router;

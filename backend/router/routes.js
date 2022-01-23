const express = require("express");
const aws = require('aws-sdk')
const multer = require("multer");
const multerS3 = require("multer-s3");


aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_TOKEN_S3,
    secretAccessKey: process.env.AWS_SECRET_TOKEN_S3,
    region: process.env.AWS_REGION_S3,
});

var s3 = new aws.S3();

const uploadS3 = multer({

    storage: multerS3({
        s3: s3,
        bucket: 'craftspot-products',
        metadata: (req, file, callBack) => {
            callBack(null, { fieldName: file.fieldname })
        },
        key: (req, file, callBack) => {
            callBack(null, Date.now().toString())
        }
    }),
}).array('photos', 10);

const uploadProductImage = async (req,res) => {
    uploadS3(req,res,error=>{
        if(error) {
            console.log(error);
            return res.status(500).json({
                status: 'fail',
                error: error
            });
        }
        if(req.files===undefined) {
            console.log("No file selected");
            return res.json("No file selected")
        }
        console.log("SUCCESS");
        return res.json({images:req.files.map(v=>v.key)})
    })
}

const router = express.Router();
const uplaodController = require("../app/controller/uploadFile");
const userController = require("../app/controller/productController");
const {sellerSignup,sellerLogin} = require("../app/controller/marchandiserController")
router.post("/form", userController.createForm);
router.post("/upload", uplaodController.fileUpload);
router.get("/list", userController.getList);
router.get("/product", userController.getProduct);
router.post("/user/signup",sellerSignup);
router.post("/user/login",sellerLogin);
router.get('/topProducts',userController.topProducts);


router.post('/uploadProductImage',(req,res,next)=>{
    console.log(req);
    next();
},uploadProductImage,(req,res)=>{
    console.log(req.file)
    return res.json({name:req.file.key});
})

router.get("/images/product/:key", (req, res) => {
    try {
      const key = req.params.key;
      const downloadParam = {
        Key: key,
        Bucket: "craftspot-products",
      };
      const readStream = s3.getObject(downloadParam).createReadStream();
      readStream.pipe(res);
    } catch (err) {
      return;
    }
  });


module.exports = router;

const sellerService = require("../services/seller_service")
const { validationResult } = require("express-validator");

exports.sellerSignup = (req,res)=>{

   sellerService.sellerSignup(req.body).then((e) => {
   
   res.send(e);
  });

}



exports.sellerLogin = (req,res)=>{
  const data = req.body;

  

    let error = validationResult(req);
    if (!error.isEmpty()) {
    
      return res
        .json({
          error: error.array()[0].msg,
        })
        .status(422);
    }
sellerService.sellerLogin(data).then((e)=>{
    res.send(e);
}) 

}
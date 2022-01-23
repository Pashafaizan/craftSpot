const formservice = require("../services/form.service");
const formModel = require("../models/form.model");
// let name = null;
// let path = null;
// let uploadData;
// const uploadFile = async (req, res) => {
//   console.log(req.files);

//   console.log("This is creteForm");

//   if (!req.files) {
//     return res.status(500).send({ msg: "file is not found" });
//   }
//   // accessing the file
//   const myFile = req.files.file;
//   console.log(req.files);
//   //  mv() method places the file inside public directory
//   console.log(__dirname);
//   myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
//     if (err) {
//       console.log(err);
//       return res.status(500).send({ msg: "Error occured" });
//     }
//     // returing the response with file path and name
//     uploadData = {
//       name: myFile.name,
//       path: myFile.path,
//     };
//     console.log(uploadData);
//     return res.send({ name: myFile.name, path: `${__dirname}/${myFile.name}` });
//   });
// };

const createForm = async (req, res) => {


  console.log("this is request body");

  console.log(req.body);
  formservice.form(req.body).then((e) => {
    res.send(e);
  });
};
const getList = (req, res) => {
  // const page = parseInt(req.query.page);
  // const limit = parseInt(req.query.limit);
  // console.log(page, limit);
  console.log("get item")
  formservice.allListItems().then((resp) => {
    // console.log(resp)
    res.send(resp);
  });
};

const getProduct = async (req, res) => {
  let id = req.query.id;

  console.log(id);
  formservice.productGet(id).then((resp) => {
    res.send(resp);
  });
};

const topProducts = async (req,res) => {
  try {
    const products = await formModel.aggregate([{$sample: {size:8}}])
    res.json(products)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  //   uploadFile,
  topProducts,
  createForm,
  getList,
  getProduct,
};

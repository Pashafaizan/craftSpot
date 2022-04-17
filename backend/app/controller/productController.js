const formservice = require("../services/form.service");
const formModel = require("../models/form.model");

const createForm = async (req, res) => {
  
  formservice.form(req.body).then((e) => {
    res.send(e);
  });
};
const getList = (req, res) => {

  formservice.allListItems().then((resp) => {
 
    res.send(resp);
  });
};

const getProduct = async (req, res) => {
  let id = req.query.id;

  formservice.productGet(id).then((resp) => {
    res.send(resp);
  });
};

const topProducts = async (req,res) => {
  try {
    const products = await formModel.aggregate([{$sample: {size:8}}])
    res.json(products)
  } catch (error) {
   res.json(error)
  }
}

module.exports = {
  //   uploadFile,
  topProducts,
  createForm,
  getList,
  getProduct,
};

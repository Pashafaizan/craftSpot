const formservice = require("../services/form.service");
const formModel = require("../models/form.model");

const createForm = async (req, res) => {
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

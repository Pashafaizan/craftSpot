const formModel = require("../models/form.model");
const form = async (data, uploadData) => {
  const formData = await new formModel(data);
  await formData.save();
  return {
    message: "Your Data has been submitted",
    success: true,
  };
};
const allListItems = async () => {
  const listItem = await formModel.find();
  return listItem;
};
const productGet = async (id) => {
const item = await formModel.findById(id);
return item;
};

module.exports = {
  form,
  productGet,
  allListItems,
};

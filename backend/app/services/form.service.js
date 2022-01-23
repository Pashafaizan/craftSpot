const formModel = require("../models/form.model");
const emailjs = require("@emailjs/browser")




const form = async (data, uploadData) => {
  console.log(data);
  const formData = await new formModel(data);
  await formData.save();
  return {
    message: "Your Data has been submitted",
    success: true,
  };
};
const allListItems = async () => {
  const listItem = await formModel.find();

  console.log(listItem);
  return listItem;
};
const productGet = async (id) => {
  console.log("this is product get");
  const item = await formModel.findById(id);
  console.log(item);
  return item;
};

const mail = async (templateParms) => {
  console.log("this is email");
  console.log(templateParms);
 const email= await emailjs.send(process.env.ZOHO_SERVICE_ID,process.env.ZOHO_TEMPLATE_ID,templateParms,process.env.ZOHO_USER_ID);
 console.log(email);
 return "this";
 
  
};

module.exports = {
  form,
  productGet,
  allListItems,
  mail,
};

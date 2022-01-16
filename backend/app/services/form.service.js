const formModel = require("../models/form.model");
const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(
//   "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"
// );


sgMail.setApiKey(
  "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"
);

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

const mail = async () => {
  console.log("this is email");
  const msg = {
    to: "faizanpasha10044@gmail.com", // Change to your recipient
    from: "thepasha32@gmail.com", // Change to your verified sender
    subject: "craftspot",
    text: "enter the api",
    html: "<strong>enter the api</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
        console.log(msg);
      console.log("Email sent");
      return msg;
    })
    .catch((error) => {
      console.error(error);
    });
  
};

module.exports = {
  form,
  productGet,
  allListItems,
  mail,
};

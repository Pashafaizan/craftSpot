const mongoose = require("mongoose");
exports.connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CLOUD_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    
  } catch (err) {
    
    process.exit(1);
  }
};

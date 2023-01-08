const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.set('strictQuery', true);
mongoose.connect(DB, {
  useNewUrlParser: true,
}).then(() =>{
  console.log("connection successful")
}).catch((error)=> console.log(`No Connection`));
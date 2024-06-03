import mongoose from "mongoose";

const Connection = () => {
  const DB_URI = `mongodb://localhost:27017`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Databse connected successfully");
  } catch (err) {
    console.log("Error while connecting to db", err.message);
  }
};

export default Connection;

import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://blackmamba:Joanjose2707@cluster0.r90eiji.mongodb.net/?retryWrites=true&w=majority&dbname=movies");
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connect;

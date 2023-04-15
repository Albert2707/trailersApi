import express from "express";
import { Port } from "./config.js";
import cors from "cors";
import connect from "./util/db.js"
import indexRoute from "./routes/index.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(indexRoute);
app.listen(Port, () => {
    connect();
  console.log("Server is running on port", Port);
});

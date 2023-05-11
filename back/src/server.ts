import express from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/myapp";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
} as ConnectOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

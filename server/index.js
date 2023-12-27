const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./route/surveyRoute");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/api/survey/", router);

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;

mongoose
  .connect(MONGOURL)
  .then(() => console.log("database connection success"))
  .catch((e) => console.log(e.message));

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

console.log("database connection");
const { name } = require("ejs");
let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("home route create");
});

// mongodb connect with express js (server)
let mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/newdatabasecreate")
  .then(() => {
    console.log("database easily connect");
  })
  .catch(() => {
    console.log("some error");
  });
// database connection done

// schemacreate

let Userschema = mongoose.Schema({
  name: String,
  lastName: String,
  num: Number,
  isBool: Boolean,
});

// collection create
let User=mongoose.model("User",Userschema)
// collection create done

app.listen(4000, () => {
  console.log("server runing");
});

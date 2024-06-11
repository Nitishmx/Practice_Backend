let express = require("express");
let app = express();
app.use(express.urlencoded({ extended: true }));
let bcrypt = require("bcrypt");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  // res.send("home route create");
  res.render("signup");
});

// mongodb connect with express js (server)
// let mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/newdatabasecreate")
//   .then(() => {
//     console.log("database easily connect");
//   })
//   .catch(() => {
//     console.log("some error");
//   });
// database connection done

// schemacreate
// let Userschema = mongoose.Schema({
//   name: String,
//   lastName: String,
//   num: Number,
//   isBool: Boolean,
// });

// collection create
// let User=mongoose.model("User",Userschema)
// collection create done

// collection inner data add
// let user=new User({name:"hye",last:"bye",num:1234,isBool:true})
// user.save()
// let n=new User({name:"good",lastName:"thank you",num:7878,isBool:false})
// n.save()
// data addition done

// schema and collection create otherfile and import other file
let Good = require("./mongodb");
let mongoose = require("mongoose");
let Sig = require("./mongodb");
const { emit } = require("nodemon");
mongoose
  .connect("mongodb://127.0.0.1:27017/other")
  .then(() => {
    console.log("database connection successful connect");
  })
  .catch(() => {
    console.log("some error create to connect database");
  });

// let nn=new Good({subject:"programming",mark:98,totalMark:99,passStatus:true})
// nn.save()

// form signup part create
app.post("/signup", async (req, res) => {
  console.log(req.body);
  let { email, password, confirmPassword } = req.body;
  // console.log(password);
  // password= await bcrypt.hash(password,10)
  console.log("hdflhalds", password);
  let userdatabase = await Sig.findOne({email});
  if (userdatabase) {
    res.send("User already exist");
  } else {
    password = await bcrypt.hash(password, 10);
    let data = new Sig({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    data.save();
    res.send("user account successful create");
  }
});

// loging form open
app.get("/loginform", (req, res) => {
  res.render("index");
});

// login form post method write

app.post("/user/login", async (req, res) => {
  let { email, password } = req.body;
  let userInfo=req.body
  let loginData=await Sig.findOne({email:userInfo.email})
  // console.log(emit,password,"email and password");
  
  if (!loginData) {
    res.send("please signup then login")
    } else {
      // let pass=await Sig.findOne({password:req.password})
    let validPass = await bcrypt.compare(userInfo.password,loginData.password);
    if (!validPass) {
      res.send("please enter the valid password")
    }
    else{
      res.send("login successful done")
    }

  }
});
app.listen(8000, () => {
  console.log("server runing");
});

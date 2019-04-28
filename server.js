const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const port = process.env.PORT||3000;
const Db = "mongodb+srv://root:toor@node-cluster-pdlty.mongodb.net/test?retryWrites=true"
app.set('view engine','ejs');

//connection to database
mongoose.connect(Db,{useNewUrlParser:true})
.then(console.log("connected to the mongo databse"))
app.use(express.static(__dirname+"/public"));

const routes = require('./routes')

// app.get('/',(req,res)=>{
//     res.render('index.ejs',{name:"xyz",caste:"abc"});
// })
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
app.use('/',routes);


//creating the server
app.listen(port,()=>{
    console.log("Server is created...\nGoto 127.0.0.1:3000");
});


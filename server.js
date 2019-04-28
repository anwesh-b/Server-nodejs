const express = require("express");
const app = express();

app.set('view engine','ejs');

app.use(express.static(__dirname+"/public"));

const routes = require('./routes')

// app.get('/',(req,res)=>{
//     res.render('index.ejs',{name:"xyz",caste:"abc"});
// })

app.use(express.urlencoded({extended:false}));
app.use('/',routes);


//creating the server
app.listen(3000,()=>{
    console.log("Server is created...\nGoto 127.0.0.1:3000");
});


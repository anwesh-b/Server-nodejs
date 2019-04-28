const Goal = require("../models/Goal.js");

exports.dataShow = (req,res) =>{
    res.render("index.ejs",{name:"xyz",caste:"abc"});
}

exports.about=(req,res)=>{
    res.render("about.ejs");
}

exports.helppp=(req,res)=>{
    res.render("helppp.ejs");
}

exports.form=(req,res)=>{
    res.render("form.ejs");
}

exports.formSubmit=(req,res)=>{
    let title = req.body.title;
    if (title === undefined || title === ""){
        res.send("You entered nothing !!!");
    }
    const goal = new Goal({
        title: title  //we can use title only also
    });
    goal.save();
    res.redirect("/");
}

exports.viewGoals=async(req,res)=>{
    const goals = await Goal.find({});
    console.log(goals)
    res.render("viewGoals.ejs",{name:"Anwesh",goals});
}
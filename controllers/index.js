let names = [];

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

exports.formSubmit=(req,res,next)=>{
    names.push(req.body.Name);
    res.render("formsubmit.ejs",{names});
}
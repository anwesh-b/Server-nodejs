const Router = require("express").Router();
const indexController = require("../controllers/index.js");

Router.get("/",indexController.dataShow);

Router.get("/about",indexController.about);

Router.get("/help",indexController.helppp);

Router.get("/form",indexController.form);

Router.post("/formSubmit",indexController.formSubmit);

module.exports = Router;


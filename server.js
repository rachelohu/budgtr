const express = require('express');
const app = express();
const budgets = require("./models/budget.js")
const methodOverride = require('method-override');
require('dotenv').config();


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + "/public"));

//Index Route
app.get("/budgets/", (req, res) => {
    res.render("index.ejs", {allBudgets: budgets});
});

//New Route
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs")
});

//Create Route
app.post("/budgets", (req,res) => {
    budgets.push(req.body)
    res.redirect("/budgets")
});

//Show Route
app.get("/budgets/:indexOfBudgetsArray", (req, res) => {
    res.render("show.ejs", {budget: budgets[req.params.indexOfBudgetsArray]});
});

//The Server Listener
app.listen(3000, () => {
    console.log("Express is listening on port");
})
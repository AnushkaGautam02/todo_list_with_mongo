// routes.js (or your existing file)

var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/todo");


const todoSchema = new mongoose.Schema({
  item: String
});

const items = mongoose.model("todo_item", todoSchema);
//const item1 = new items({ item: "Coding" });
     //item1.save();
// // Modify the route handling function to use async/await
router.get('/', async function (req, res, next) {
  items.find({}).then( data =>{
    res.render('index', {ejes: data});
  }).catch(err=>{
    console.log(err);
  });
});

router.post('/',(req,res)=>{
  const itemName = req.body.em1;
  const todo4 = new items({
    item: itemName
  });
  todo4.save();
  res.redirect('/');
});

router.post("/delete",(req,res)=>{
  const checked = req.body.ch1;
  items.findByIdAndDelete(checked).then( data=>{
    console.log("data deleted");
  }).catch(err=>{
    console.log(err);
  });
  res.redirect('/');
});

module.exports = router;

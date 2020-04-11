const Burger = require('../models/burger.js');
const db = require("../models");

module.exports = function(app){

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(results) {
          res.render("index",{burger:results});
          
        });
      });
  
      
      
    app.get("/api/burgerName",(req,res)=>{
        db.Burger.findAll({}).then((results)=> res.json(results));
    });
       
    

    app.post("/api/newBurger",(req,res)=> {
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then((results)=>{
          res.json({id: results.id});
            res.status(200).end()
        } );
    });

      
      app.put("/api/newBurger/:id", (req,res)=>{
        
        db.Burger.findOne({
          where:{
            id: req.params.id
          }
        }).then(function(result){
          result.update({
            devoured: req.body.devoured
          });   
          res.status(200).end();
        });
      });


    app.delete("/api/newBurger/:id", function(req, res) {
        console.log("Burger ID:");
        console.log(req.params.id);
        db.Burger.destroy({
          where: {
            id: req.params.id
          }
        }).then(function() {
         
          res.end();
        });
      });
    };
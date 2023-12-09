var express =require("express");
var cors=require("cors");
const { MongoClient } = require("mongodb");
var mongoClient=require("mongodb").MongoClient;
var conStr="mongodb://127.0.0.1:27017";
var app=express();//we are creating sever api  side to handle all method
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/customer",(req,res)=>
{
  mongoClient.connect(conStr).then(obj=>{
    var database= obj.db("tutorial");
    database.collection("customer").find({}).toArray().then(documents=>{
        res.send(documents);
        res.end();
    })
    .catch(err=>{
        console.log(err)
    })
  }) 

});
app.post("/registercustomer",(req, res)=>{
    var customerDetails={
      UserId:req.body.UserId,
      UserName:req.body.UserName,
      Password:req.body.Password,
      Age:parseInt(req.body.Age),
      Email:req.body.Email,
      Mobile:req.body.Mobile
    };
    mongoClient.connect(conStr).then(obj=>{
        var database= obj.db("tutorial");
        database.collection("customer").insertOne(customerDetails).then(()=>{
            console.log("Record Inserted");
            res.redirect("/customer");
        })
       
      }) 
});
app.listen("5000");
console.log(`server started :http://127.0.0.1:5000`);
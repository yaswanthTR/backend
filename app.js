const express=require("express"); 
const mongoose=require("mongoose");  
const _=require("lodash");
mongoose.connect("mongodb+srv://yaswanth:6301278150@cluster0.zihvf.mongodb.net/listdb?retryWrites=true&w=majority");
const app=express();   
app.use(express.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.use(express.static("static"));  
const schema={
    name:String,
}; 
const item=mongoose.model("item",schema); 
app.get("/",function(req,res)
{
    res.render("list",{title:"home"}); 
});  
app.get("/:customname",function(req,res)
{   
    var name=_.capitalize(req.params.customname);
    res.render("about");
}) ;
app.post("/",function(req,res)
{    
  if(req.body.button==="home")
  { 
    const itemname=req.body.newname; 
    const newitem=new item(
    {
        name:itemname
    }); 
    newitem.save();  
    res.redirect("new"); 
  } 
}); 
app.listen(process.env.PORT || 3000,function()
{
    console.log("server running");
});

 
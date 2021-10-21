const { resolveInclude } = require("ejs");
const express=require("express"); 
const app=express();    
app.use(express.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.use(express.static("static")); 
const item=[],work=[]; 
app.get("/",function(req,res)
{
    res.render("list",{title:"home" ,newitem:item});
});   
app.post("/",function(req,res)
{   
  if(req.body.button==="home")
  {
    item.push(req.body.newItem); 
    res.redirect("/"); 
  }
  else 
  {
      work.push(req.body.newItem);
      res.redirect("/work");
  }
}); 
app.listen(3000,function()
{
    console.log("server running");
});
app.get("/work",function(req,res)
{
    res.render("list",{title:"work",newitem:work});
}); 
app.get("/about",function(req,res)
{
    res.render("about");
}); 
app.post("/about",function(req,res)
{
    res.send("hii");
});

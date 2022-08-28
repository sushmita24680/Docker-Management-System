const express=require('express')
const {exec}=require('child_process')


const app=express()
app.get("/form",function(req,res){
    const p=req.query.soc;
  
    res.send(p);
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get("/docontainer",(req,res)=>
        {
            
exec('docker run -dit --name myos centos',(err,stdout,stderr)=>{
        res.send(stdout);


        })
    })
    app.get("/listcontainer",(req,res)=>
        {
exec('docker ps',(err,stdout,stderr)=>{
        res.send(stdout);


        })
    })

    app.get("/showimage",(req,res)=>
        {
exec('docker image ls -a',(err,stdout,stderr)=>{
        res.send(stdout);


        })
    })
    app.get("/pruneimage",(req,res)=>
        {
exec('docker image prune -a',(err,stdout,stderr)=>{
        res.send(stdout);


        })
    });
    app.get("/pullimg",(req,res)=>
    {
exec('docker image pull {image name}',(err,stdout,stderr)=>{
    res.send(stdout);


    })
})
app.get("/hisimg",(req,res)=>
{
exec('docker image history {image name}',(err,stdout,stderr)=>{
res.send(stdout);


})
})
app.get("/rmimg",(req,res)=>
{
exec('docker image rm {image name}',(err,stdout,stderr)=>{
res.send(stdout);


})
})
app.get("/ipimg",(req,res)=>
{
exec('docker inspect --format="{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}" $INSTANCE_ID',(err,stdout,stderr)=>{
res.send(stdout);


})
})
    
app.listen(3000,()=> console.log("server run"))

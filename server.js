const express=require('express')
const {exec}=require('child_process')
const app=express()
const cors = require('cors');
app.use(cors());
app.get("/form",function(req,res){
    res.send("hi");
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index1.html")
})
app.get("/docontainer",(req,res)=>
        {
const iname=req.query.t;
                const cname=req.query.y;
exec('docker run -dit --name '+" "+cname+" "+iname ,(err,stdout,stderr)=>{
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
exec('docker image prune -a -y',(err,stdout,stderr)=>{
        res.send("Successfully deleted");


        })
    });
    app.get("/pullimg",(req,res)=>
    {
            const iname=req.query.t;
exec('docker image pull '+" "+iname,(err,stdout,stderr)=>{
    res.send(stdout);


    })
})
app.get("/hisimg",(req,res)=>
{
{
const iname=req.query.t;
        exec('docker image history '+" "+iname,(err,stdout,stderr)=>{
res.send(stdout);


})
})
app.get("/rmimg",(req,res)=>
{
        const iname=req.query.t;
exec('docker image rm '+" "+iname,(err,stdout,stderr)=>{
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


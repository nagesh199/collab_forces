const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const { connection, Index, Gainer, Loser } = require("./db");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const httpServer = http.createServer(app);


const io = new Server(httpServer,{
    cors:{
        origin:"*",
        methods:["GET","POST"],
        allowedHeaders :["my-custom-header"],
        credentials:true
    }
});

io.on("connection",async(socket)=>{
  const indexdata = await Index.find();
  const gainerdata = await Gainer.find();
  const loserdata = await Loser.find();
 const payload = {
    indexdata,
    gainerdata,
    loserdata
 }
   socket.emit("stock",payload)
  
})

app.post("/post", async(req,res) =>{
    try {
       const index = await  Loser.create(req.body);
       return res.status(201).send(index)
    }
    catch(err){
       return res.status(500).send({message:err.message})
    }
  })
httpServer.listen(8080, async()=>{
    await connection
    console.log("server started on 8080 ")
})
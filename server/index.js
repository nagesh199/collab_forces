const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const os = require("os-utils")
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
    },
    transports:["websocket","polling"]
});
let tick = 0
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
   setInterval(()=>{
       os.cpuUsage(cpuPercent=>{
         socket.emit("cpu",{
           name:tick,
           value:cpuPercent
         })
       })
   },1000)
})


httpServer.listen(8080, async()=>{
    await connection
    console.log("server started on 8080 ")
})
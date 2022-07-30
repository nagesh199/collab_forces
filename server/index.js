const express = require("express");
const http = require("http");
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const credentials = require('./config/credentials');
const {Server} = require("socket.io");
const os = require("os-utils")

const { connection, Index, Gainer, Loser } = require("./db");


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(credentials);
app.use(cors(corsOptions));

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
           value:cpuPercent
         })
       })
   },1000)
})

app.get("/", (req, res) => {
  res.send("Server connected successfully!");
})

const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, async()=>{
    await connection
    console.log(`server started on port ${PORT} `)
})
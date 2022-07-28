const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://nagesh12:nagesh123@cluster0.rdlsg.mongodb.net/test");

const indexSchema = new mongoose.Schema({
    title:String,
    imgUrl:String,
    current:Number,
    basePrice:Number,
})
const gainerSchema = new mongoose.Schema({
    title:String,
    imgUrl:String,
    current:Number,
    basePrice:Number,
})
const loserSchema = new mongoose.Schema({
    title:String,
    imgUrl:String,
    current:Number,
    basePrice:Number,
})


const Index = mongoose.model("index",indexSchema);
const Gainer = mongoose.model("gainer",gainerSchema);
const Loser = mongoose.model("loser",loserSchema);

module.exports = {connection,Index,Gainer,Loser}
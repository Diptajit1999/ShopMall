require("dotenv").config()
const express=require("express")
const app=express()
const Port=process.env.Port
const {connection}=require("./lib/DB/db")
app.use(express.json())



app.listen(Port,()=>{
    console.log(`server is running at Port ${Port}`)
})
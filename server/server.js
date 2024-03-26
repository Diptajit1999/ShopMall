require("dotenv").config()
const express=require("express")
const app=express()
const cors=require("cors")
const Port=process.env.Port || 7500
const {connection}=require("./lib/DB/db")
const {adminRouter}=require("./Routes/api/admin.route")
app.use(express.json())

app.use(cors())


app.use("/adminRoute",adminRouter)




app.listen(Port,async()=>{
    try {
        await connection;
        console.log(`server is running at Port ${Port}`)
    } catch (error) {
        console.log(error)
    }
    
})
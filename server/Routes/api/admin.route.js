const express=require("express")
const {Register}=require("../../Controllers/admin.controller")
const adminRouter=new express.Router()

// admin auth routes


adminRouter.post("/register",Register)


module.exports={
    adminRouter
}




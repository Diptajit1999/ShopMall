const mongoose=require("mongoose");
const validate=require("validator");



const adminSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validate.isEmail(value)){
                throw new Error("Please Enter a Valid Email")
            }
        }
    },
    profile:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

const AdminModel=mongoose.model("admin",adminSchema)

module.exports={
    AdminModel
}
const multer=require("multer")



const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./adminUploads")
    }
})
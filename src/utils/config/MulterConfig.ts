import multer from "multer"


export const  multerCloudinary = multer ({
    storage: multer.diskStorage ({}),
    limits: {fileSize:500000}
})
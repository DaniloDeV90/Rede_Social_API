import multer, {FileFilterCallback, MulterError} from "multer";




const random = Math.floor ( Math.random () * 100) + 1;

import path from "path"


    
 const storage = multer.diskStorage({
    destination: (req, file, cb) => {


        cb(null, path.join(__dirname, "..", "..","..", "image"))
    },
    filename: (req, file, cb) => {
        const nome = file.originalname.toLowerCase ().replace (/\s+/g, '')
        cb(null, file.fieldname + "-" + random + Date.now() + nome)
    }   

})

const limits = {
    fileSize: 1024 * 1024 * 7
}




export default multer ({storage,limits, fileFilter(req, file, callback) {
console.log (file)
if (file.mimetype == "image/png" || file.mimetype == "image/jpeg"  ) return callback (null , true) 



    callback (null, false)
    return callback (new Error ("arquivo nao suportado"))



},})



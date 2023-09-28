
import multer from "multer"
const storage = multer.memoryStorage();
const limits = {
    fileSize: 1024 * 1024 * 7
}


const upload = multer({
    storage, limits, fileFilter(req, file, callback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") return callback(null, true)



        callback(null, false)
        return callback(new Error("arquivo nao suportado"))


    }
})




export default upload
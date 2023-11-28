
import multer from "multer"
import CustomErrror from "../../../errors/ErrosLogin/CustomError";
import { Request } from "express";
import { ImulterUploadImages } from "./ImulterCloudConfig";


interface limitsfileSize {
    fileSize: number
}


export class MulterUpload implements ImulterUploadImages {

    private storage: multer.StorageEngine
    private limits: limitsfileSize

    constructor(limits: limitsfileSize) {
        this.storage = multer.memoryStorage(),
            this.limits = limits
    }

    upload(): multer.Multer {
        return multer({
            storage: this.storage,
            limits: this.limits,
            fileFilter: this.fileFilter
        })
    }


    fileFilter(req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
            return callback(null, true)
        }
        callback(null, false)
        return callback(new CustomErrror("arquivo nao suportado", 408))


    }
}



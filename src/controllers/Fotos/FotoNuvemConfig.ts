import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer"
import multers3 from "multer-s3"


const  s3 = new S3Client ({
region: process.env.AWS_DEFAULT_REGION  as string,
credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
}

});

const upload = multer ({
    storage: multers3 ({
        s3,
        bucket: process.env.AWS_NAME_BUCKET as string,
        acl: "public-read",
        contentType: multers3.AUTO_CONTENT_TYPE,
        metadata: function (req,file,cb) {
            cb (null, file.fieldname)
        },
        key: function (req,file,cb) {
            cb(null, Date.now().toString() + file.originalname)
        }
    }),
    fileFilter(req, file, callback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpeg"  ) return callback (null , true) 



    callback (null, false)
    return callback (new Error ("arquivo nao suportado"))
    },
    limits: {
        fileSize: 1024 * 1024 * 1
    }
})

export default upload
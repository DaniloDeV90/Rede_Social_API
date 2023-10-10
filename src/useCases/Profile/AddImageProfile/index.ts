

import { S3BucketRepository } from "../../../respositories/implementations/S3Bucket";
import { MulterUpload } from "../../../utils/config/MulterConfig/MulterCloudConfig";
import { AddImagemProfileController } from "./AddImagemProfileController";
import { AddImagemProfileUseCase } from "./AddImagemProfileUseCase";
import { PostgresImageProfileRepository } from "../../../respositories/implementations/PostgreImagemRepository";
const s3BUcketRepository = new S3BucketRepository()
const addImageRepositorypostgre = new PostgresImageProfileRepository()
const addImagemProfileUseCase = new AddImagemProfileUseCase(s3BUcketRepository, addImageRepositorypostgre)

const MulterConfig = new MulterUpload({ fileSize: 1024 * 1024 * 7 })

const addImagemMulterController = new AddImagemProfileController(MulterConfig, addImagemProfileUseCase)

export { addImagemMulterController, addImagemProfileUseCase }
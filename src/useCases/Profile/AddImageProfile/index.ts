
import { S3BucketRepository } from "../../../respositories/implementations/S3Bucket";
import { MulterUpload } from "../../../utils/config/MulterConfig/MulterCloudConfig";
import { AddImagemProfileController } from "./AddImagemProfileController";
import { AddImagemProfileUseCase } from "./AddImagemProfileUseCase";
import { PostgresImageProfileRepository } from "../../../respositories/implementations/PostgreImagemRepository";
import { CloudinaryRepository } from "../../../respositories/implementations/CloudinaryRepository";
const cloudnaryRepository = new CloudinaryRepository()
const addImageRepositorypostgre = new PostgresImageProfileRepository()
const addImagemProfileUseCase = new AddImagemProfileUseCase(cloudnaryRepository, addImageRepositorypostgre)

const MulterConfig = new MulterUpload({ fileSize: 1024 * 1024 * 7 })

const addImagemMulterController = new AddImagemProfileController(MulterConfig, addImagemProfileUseCase)

export { addImagemMulterController, addImagemProfileUseCase }
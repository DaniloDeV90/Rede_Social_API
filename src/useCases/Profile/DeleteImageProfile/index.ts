import { PostgresImageProfileRepository } from "../../../respositories/implementations/PostgreImagemRepository";
import { S3BucketRepository } from "../../../respositories/implementations/S3Bucket";
import { DeleteImageProfile } from "./DeleteImageProfileController";
import { DeleteImageProfileUseCase } from "./DeleteImageProfileUseCase";
const s3bucketRepository = new S3BucketRepository()
const postgresImagesProfile = new PostgresImageProfileRepository()
const deleteImageProfileUseCase = new DeleteImageProfileUseCase(postgresImagesProfile, s3bucketRepository)
const deleteImageProfileController = new DeleteImageProfile(deleteImageProfileUseCase)

export { deleteImageProfileController, deleteImageProfileUseCase }
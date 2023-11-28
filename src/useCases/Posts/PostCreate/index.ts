import { PostgrePostRepsoitory } from "../../../respositories/implementations/PostgrePostRepository";
import { S3BucketRepository } from "../../../respositories/implementations/S3Bucket";
import { PostCreateController } from "./PostCreateController";
import { PostCreateUseCase } from "./PostCreateUseCase";

const s3bucket =  new S3BucketRepository ()
const PostRepository = new PostgrePostRepsoitory ()
const postCreateUseCase = new PostCreateUseCase (s3bucket,PostRepository)
const createPostController  = new PostCreateController (postCreateUseCase)

export { postCreateUseCase, createPostController}
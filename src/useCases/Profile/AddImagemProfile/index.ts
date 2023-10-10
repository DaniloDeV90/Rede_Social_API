
import { MulterUpload } from "../../../utils/config/MulterConfig/MulterCloudConfig";
import { AddImagemProfileController } from "./AddImagemProfileController";
import { AddImagemProfileUseCase } from "./AddImagemProfileUseCase";

const addImagemProfileUseCase = new AddImagemProfileUseCase  ()

const MulterConfig = new MulterUpload ({fileSize:  1024 * 1024 * 7}) 

const addImagemMulterController = new AddImagemProfileController (MulterConfig,addImagemProfileUseCase)

export {addImagemMulterController, addImagemProfileUseCase}
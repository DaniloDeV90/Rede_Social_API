import { Request } from "express";
import multer from "multer";

export interface ImulterUploadImages {
    upload(): multer.Multer
    fileFilter(req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback): void
}
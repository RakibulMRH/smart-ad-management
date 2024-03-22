import { Injectable } from '@nestjs/common';
import { Express } from 'express';

@Injectable()
export class FileUploadService {
    uploadFile(file: Express.Multer.File) {
         return { message: 'File uploaded successfully', filename: file.filename };
    }
}
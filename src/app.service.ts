import {Injectable, UploadedFile} from '@nestjs/common';
import mobilenetClassificationUtil from "./classification/mobilenet-classification-util";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async uploadFile(file: Express.Multer.File) {
    try {
      const predictions = await mobilenetClassificationUtil.classify(
          file.buffer,
      );
      return predictions;
    } catch (error) {
      return { message: error.message };
    }
  }
}

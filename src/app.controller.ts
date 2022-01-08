import {Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {FileInterceptor} from "@nestjs/platform-express";
import mobilenetClassificationUtil from './classification/mobilenet-classification-util';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('image-search')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
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

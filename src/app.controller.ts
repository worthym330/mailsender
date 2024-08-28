import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { ExcelService } from './excel/excel.service';


@Controller()
export class AppController {
  constructor(
    private readonly emailService: EmailService,
    private readonly excelService: ExcelService,
  ) {}

  @Post('send-email')
  async sendEmail(@Body() body: any) {
    return await this.emailService.sendEmail(body);
  }

  @Post('upload-excel')
  async uploadExcel(@Body() body: { data: any[]; filePath: string }) {
    return await this.excelService.createAndSaveExcel(body.data, body.filePath);
  }
}

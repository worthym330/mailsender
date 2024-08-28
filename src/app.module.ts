import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailService } from './email/email.service';
import { ExcelService } from './excel/excel.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EmailService, ExcelService],
})
export class AppModule {}

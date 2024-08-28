import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';

@Injectable()
export class ExcelService {
  async createAndSaveExcel(data: any[], filePath: string): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    // Add headers
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Email', key: 'email', width: 30 },
      // Add more headers as needed
    ];

    // Add rows
    data.forEach((item) => worksheet.addRow(item));

    // Save to file
    await workbook.xlsx.writeFile(filePath);
  }
}

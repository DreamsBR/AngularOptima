import { Injectable } from '@angular/core'
import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver'

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
const EXCEL_EXT = '.xlsx'

@Injectable({
  providedIn: 'root'
})
export class ExporterService {
  constructor() {}
  exportToExcel(json: any[], excelFileName: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json)
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data']
    }
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    this.saveAsExcel(excelBuffer, excelFileName)
  }
  private saveAsExcel(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE })
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT)
  }
}

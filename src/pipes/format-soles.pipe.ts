import { Pipe, PipeTransform } from '@angular/core'
import numeral from 'numeral'

@Pipe({ name: 'formatSoles' })
export class FormatSoles implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'undefined') {
      if (value > 0) {
        const n = 'S/. ' + numeral(value).format('0,0.00')
        return n
      }
    } else {
      return ''
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'formatDate' })
export class FormatDate implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'undefined') {
      const nformat = value.substring(0, 10).split('-').reverse().join('/')
      return nformat
    } else {
      return ''
    }
  }
}

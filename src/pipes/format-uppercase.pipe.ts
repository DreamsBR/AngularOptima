import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'formatUppercase' })
export class FormatUppercase implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'undefined') {
      const nformat = value.toUpperCase()
      return nformat
    } else {
      return ''
    }
  }
}

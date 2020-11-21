import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'reverseStr' })
export class ReverseStr implements PipeTransform {
  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`
    return 'textorevertido'
  }
}

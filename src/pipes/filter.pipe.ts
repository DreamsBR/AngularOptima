import { Pipe, PipeTransform } from '@angular/core'
import { pipe } from 'rxjs';

@Pipe({
  name:'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value:any, arg:any):any {
    const resultPosts = [];
    for(const  post of value){
      if(post.nombre.toLowerCase().indexof(arg.toLowerCase()) > -1){
        console.log('si')
        resultPosts.push(post)
      }
    }


  }

}

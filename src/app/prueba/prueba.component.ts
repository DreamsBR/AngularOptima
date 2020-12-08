import { Component, OnInit, ɵConsole } from '@angular/core'
import { PruebaService } from './prueba.service'

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  constructor(private pruebaService: PruebaService) {}

  ngOnInit() {
    const text =
      'iVBORw0KGgoAAAANSUhEUgAAADsAAAA1CAIAAABwTQSUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABTSURBVGhD7c5BDQAgDAAxhOw5/87wgIp7kDSpgJ47+xfjnnHPuGfcM+4Z94x7xj3jnnHPuGfcM+4Z94x7xj3jnnHPuGfcM+4Z94x7xj3jnnFt9gG5vl1+62CeAgAAAABJRU5ErkJggg=='

    var url =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='

    /* const b64toBlob = (text, type = 'application/octet-stream') => 
      fetch(`data:${type};base64,${text}`) */
    const validBase64 = 'data:image/png;base64,' + text
    fetch(validBase64)
      .then((res) => res.blob())
      .then((blob) => {
        var link = window.document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
  }

  handleUpload(event) {
    // TODO: Validate PDF extension

    const file = event.target.files[0]
    const extension = file.name.split('.').pop()
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      console.log(reader)
      if (typeof reader.result === 'string') {
        this.pruebaService.postUploadFile(reader.result).subscribe(
          (resp) => {
            console.log(resp)
          },
          (error) => {
            console.log(error)
          }
        )
      } else {
        console.log('No se pudo convertir a String base 64')
      }
    }
  }
}

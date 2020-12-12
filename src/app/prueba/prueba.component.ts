import { Component, OnInit, ɵConsole } from '@angular/core'
import { PruebaService } from './prueba.service'

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  constructor(private pruebaService: PruebaService) {}

  ngOnInit() {}
}

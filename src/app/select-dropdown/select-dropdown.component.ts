import { Component, OnInit } from '@angular/core'

interface Food {
  value: string
  viewValue: string
}

@Component({
  selector: 'select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.css']
})
export class SelectDropdownComponent implements OnInit {
  foods: Food[] = [
    { value: null, viewValue: '-- Seleccionar --' },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ]

  constructor() {}

  ngOnInit() {}

  emitOnChangeValue() {
    console.log('ewrwerwe')
  }
}

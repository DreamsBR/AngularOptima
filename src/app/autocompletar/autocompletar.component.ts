import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core'

@Component({
  selector: 'autocompletar',
  templateUrl: './autocompletar.component.html',
  styleUrls: ['./autocompletar.component.css']
})
export class AutocompletarComponent implements OnInit {
  @Input() options: any[] = []
  @Input() searchKeyword: string = 'name'
  @Input() keyToShow: string = 'name'
  @Input() label: string = 'Dato'

  @Output() onSelected = new EventEmitter<string>()
  @Output() onInputChanged = new EventEmitter<string>()
  @Output() onCleared = new EventEmitter<string>()

  @ViewChild('ngAutoComplete', { static: true }) ngAutoComplete: any

  constructor() {}

  ngOnInit() {}

  // Métodos que puede utilizar desde componentes padres
  public changeOnlyText(text: string) {
    let validText = ''
    if (text) {
      validText = text
    }
    this.ngAutoComplete.writeValue(validText)
  }

  // Métodos internos
  onSelectedItem(optionObj) {
    this.emitEventSelected(optionObj)
  }

  onChangeInput(newtext) {
    this.emitEventChangedInput(newtext)
  }

  onClearedInput() {
    this.emitEventCleared()
  }

  emitEventSelected(optionSelected: any) {
    this.onSelected.emit(optionSelected)
  }

  emitEventChangedInput(newtext) {
    this.onInputChanged.emit(newtext)
  }

  emitEventCleared() {
    this.onCleared.emit()
  }

  get getPlaceHolder() {
    return 'Buscar ' + this.label.toLowerCase()
  }
}

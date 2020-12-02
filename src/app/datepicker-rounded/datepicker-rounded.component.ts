import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'datepicker-rounded',
  templateUrl: './datepicker-rounded.component.html',
  styleUrls: ['./datepicker-rounded.component.css']
})
export class DatepickerRoundedComponent implements OnInit {
  value: NgbDateStruct // = this.calendar.getToday()
  @Input() label: string

  @Output() onDateChanged = new EventEmitter<string>()

  constructor(private calendar: NgbCalendar) {}

  ngOnInit() {
    //console.log(this.value)
  }

  setValue(datestring: string) {
    if (datestring === '' || datestring === null) {
      this.value = undefined
      this.emitEventChange('')
    } else {
      const year = parseInt(datestring.substring(0, 10).split('-')[0])
      const month = parseInt(datestring.substring(0, 10).split('-')[1])
      const day = parseInt(datestring.substring(0, 10).split('-')[2])
      this.value = {
        year: year,
        month: month,
        day: day
      }
      this.onDateSelection(this.value)
    }
  }

  onDateSelection(ngbdate: any) {
    if (typeof ngbdate !== 'undefined') {
      const day = ngbdate.day < 10 ? '0' + ngbdate.day : ngbdate.day
      const month = ngbdate.month < 10 ? '0' + ngbdate.month : ngbdate.month
      const year = ngbdate.year
      const sendDateValue = `${year}-${month}-${day}`
      this.emitEventChange(sendDateValue)
    }
  }

  emitEventChange(date: string) {
    this.onDateChanged.emit(date)
  }

  printValue() {
    console.log(this.value)
  }

  get getLabelString(): string {
    if (typeof this.label !== 'undefined') {
      return this.label
    } else {
      return `DatePicker`
    }
  }

  get getDateString(): string {
    if (typeof this.value !== 'undefined') {
      const day = this.value.day < 10 ? '0' + this.value.day : this.value.day
      const month = this.value.month < 10 ? '0' + this.value.month : this.value.month
      const year = this.value.year
      return `${day}/${month}/${year}`
    } else {
      return 'DD/MM/YYYY'
    }
  }
}

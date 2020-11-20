import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'datepicker-rounded',
  templateUrl: './datepicker-rounded.component.html',
  styleUrls: ['./datepicker-rounded.component.css']
})
export class DatepickerRoundedComponent implements OnInit {
  @Input() value: NgbDateStruct // = this.calendar.getToday()
  @Input() label: string

  @Output() onDateChanged = new EventEmitter<string>()

  constructor(private calendar: NgbCalendar) {}

  ngOnInit() {
    //console.log(this.value)
  }

  onDateSelection(ngbdate) {
    if (typeof ngbdate !== 'undefined') {
      const day = ngbdate.day < 10 ? '0' + ngbdate.day : ngbdate.day
      const month = ngbdate.month < 10 ? '0' + ngbdate.month : ngbdate.month
      const year = ngbdate.year
      const sendDateValue = `${day}-${month}-${year}`
      this.emitEventChange(sendDateValue)
    }
  }

  emitEventChange(date: string) {
    this.onDateChanged.emit(date)
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

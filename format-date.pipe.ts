import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  constructor(private datePipe: DataPipe) {}

  transform(value: any): any {
    return this.datePipe.transform(value, 'dd/MM/yyyy');
  }
}

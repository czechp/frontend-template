import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from "@angular/common";

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const date = value as string;
    return formatDate(date, "HH:mm:ss dd.MM.YYYYr", "en_GB");
  }

}

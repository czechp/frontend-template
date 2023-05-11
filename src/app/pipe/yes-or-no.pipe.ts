import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'yesOrNo'
})
export class YesOrNoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const booleanValue = value as boolean;
    if (booleanValue)
      return "TAK";
    return "NIE";
  }

}

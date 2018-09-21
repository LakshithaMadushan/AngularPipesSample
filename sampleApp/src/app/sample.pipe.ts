import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class SamplePipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log(args);
    console.log(value);

    return Math.pow(value, args);
  }

}

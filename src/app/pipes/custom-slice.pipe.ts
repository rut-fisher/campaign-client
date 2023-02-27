import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSlice'
})
export class CustomSlicePipe implements PipeTransform {

  transform(value: any[], start: number, numToCut: number): any[] {
    let newVal: any[] = [];
    if (value.length) {
      if (value.length < numToCut) {
        return value;
      }
      newVal = value.slice(start, (start + numToCut))
      if (newVal.length < numToCut) {
        newVal.push(...value.slice(0, numToCut - newVal.length))
      }
    }
    return newVal;
  };
}

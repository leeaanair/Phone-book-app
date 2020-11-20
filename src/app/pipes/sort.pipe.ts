import { Pipe, PipeTransform } from '@angular/core';

import { Person } from '../class/person';

@Pipe({
  name: 'sort',
  pure: false
})

export class SortPipe implements PipeTransform {

  transform(value: Person[], args: any[]): any {


    console.log("It was called");
    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier = 1;

    if (sortDirection === 'desc') {
      multiplier = -1;
    }

    if(multiplier === 1){

      value.sort((a,b) => a[sortField].localeCompare(b[sortField]));
    }
    else{

      value.sort((a,b) => a[sortField].localeCompare(b[sortField])).reverse();

    }

      // console.log(a[sortField]);
      // console.log(b[sortField]);

      return value;
}

}
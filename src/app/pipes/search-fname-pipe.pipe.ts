import { Pipe, PipeTransform } from '@angular/core';

import { Person } from '../class/person';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: Person[], searchText: string): Person[] {

    console.log("Search was called");

    if(!items) 
    	return [];
    if(!searchText || searchText==="") 
    	return items;
    searchText = searchText.toLowerCase();
    return items.filter( (it) => {
      return (it.fname.toLowerCase().includes(searchText) || it.lname.toLowerCase().includes(searchText));
    });
   }
}

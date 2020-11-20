import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';


// import { SearchPipePipe } from '../pipes/search-pipe.pipe';

import { SearchDataService } from "../service/search-data.service";
import { SortDataService } from "../service/sort-data.service";

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent {

  constructor(public sortDataService: SortDataService, public searchDataService: SearchDataService) { 


  }

  public searchText = "";


  changeSearchContact(){

    this.searchDataService.searchData =  this.searchText;
  }

  // console.log(this.searchText);
  // this.searchDataService.searchData = this.searchText;
  // console.log("searching for word");
  // console.log(this.searchDataService.searchData);


  sort(param : string, order: string){

    this.sortDataService.sortArg.param = param;
    this.sortDataService.sortArg.order = order;
  }

}

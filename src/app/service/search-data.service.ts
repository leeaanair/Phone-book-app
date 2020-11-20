import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' //no need to register
})

export class SearchDataService{
    public searchData= "";

    constructor(){

        this.searchData = "";

    }
}
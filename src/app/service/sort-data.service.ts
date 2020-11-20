import { Injectable } from '@angular/core';
import { Sort } from '../class/sort';

@Injectable({
    providedIn: 'root' //no need to register
})

export class SortDataService{
    public sortArg = new Sort("", "");

    constructor(){
        this.sortArg.param = "fname";
        this.sortArg.order = "asc";
    }
}
import { Injectable } from '@angular/core';
import { Person } from '../class/person';

@Injectable({
    providedIn: 'root' //no need to register
})

export class ContactDataService{
    public persons : Person[];

    constructor(){
        this.persons=[];
    }
}
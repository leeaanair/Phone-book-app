import { Injectable } from '@angular/core';
import { Person } from '../class/person';

@Injectable({
    providedIn: 'root' //no need to register
})

export class EditDataService{
    public editPerson = new Person("", "", "");
    public oldPerson = new Person("", "", "");

    constructor(){

    	this.editPerson.fname = "";
    	this.editPerson.lname = "";
    	this.editPerson.phone = "";  

    	this.oldPerson.fname = "";
    	this.oldPerson.lname = "";
    	this.oldPerson.phone = "";  

    }
}
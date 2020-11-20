import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { EditDataService } from '../service/edit-data.service';
import { ContactDataService } from '../service/contact-data.service';

import { Person } from '../class/person';

@Component({
  selector: 'app-edit-contact-modal-content',
  templateUrl: './edit-contact-modal-content.component.html',
  styleUrls: ['./edit-contact-modal-content.component.css']
})

export class EditContactModalContentComponent {

  constructor(public editService: EditDataService, public dataService: ContactDataService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }



  personModel = new Person("", "", "+91");


  onSubmit(){


  	console.log(this.editService.editPerson);	
  	console.log(this.editService.oldPerson);	



  	this.personModel.fname = this.editService.editPerson.fname;
    this.personModel.lname = this.editService.editPerson.lname;
    this.personModel.phone = this.editService.editPerson.phone;


  	this.dataService.persons.push(this.personModel);

    console.log(this.personModel instanceof Person);
    console.log(this.editService.oldPerson instanceof Person);


    const index: number = this.dataService.persons.findIndex(x => (x.lname === this.editService.oldPerson.lname && x.fname === this.editService.oldPerson.fname && x.phone === this.editService.oldPerson.phone));
    console.log(this.dataService.persons);

    if (index !== -1) {
        
                this.dataService.persons.splice(index, 1);
                console.log("a thing got deleted");
    }        


    const modalRef = this.activeModal.dismiss(EditContactModalContentComponent);

  }

}

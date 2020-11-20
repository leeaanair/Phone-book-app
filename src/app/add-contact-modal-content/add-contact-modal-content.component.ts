import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { ContactDataService } from '../service/contact-data.service';

import { Person } from '../class/person';

@Component({
  selector: 'add-contact-modal-content',
  templateUrl: 'add-contact-modal-content.component.html' 
})

export class AddContactModalContent {

	
  // @Output() contactCreated = new EventEmitter<Person>();



  constructor(public dataService: ContactDataService, public activeModal: NgbActiveModal) {



  }

  personModel = new Person("", "", "+91");


  onSubmit(){


  	this.dataService.persons.push(this.personModel);


    const modalRef = this.activeModal.dismiss(AddContactModalContent);

  }
}

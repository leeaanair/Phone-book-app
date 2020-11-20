import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { ContactDataService } from '../service/contact-data.service';
import { EditDataService } from '../service/edit-data.service';
import { SearchDataService } from '../service/search-data.service';
import { SortDataService } from "../service/sort-data.service";

import { EditContactModalContentComponent } from "../edit-contact-modal-content/edit-contact-modal-content.component";

import { Person } from '../class/person';
import { Sort } from '../class/sort';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {


  constructor(public sortDataService: SortDataService, public searchDataService : SearchDataService, public dataService: ContactDataService, public editService: EditDataService, private modalService: NgbModal) {



  }


  ngOnInit(): void {
  }


  delete(person : Person){

    const index: number = this.dataService.persons.indexOf(person);
    if (index !== -1) {
    	
        this.dataService.persons.splice(index, 1);
    }        


  }

  edit(person : Person){


    console.log("edit was clicked");

    this.editService.oldPerson.fname = person.fname;
    this.editService.oldPerson.lname = person.lname;
    this.editService.oldPerson.phone = person.phone;


    this.editService.editPerson.fname = person.fname;
    this.editService.editPerson.lname = person.lname;
    this.editService.editPerson.phone = person.phone;

    const modalRef = this.modalService.open(EditContactModalContentComponent);







  }


}

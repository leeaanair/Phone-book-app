import { Component, OnInit } from '@angular/core';
import { AddContactModalContent } from '../add-contact-modal-content/add-contact-modal-content.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(AddContactModalContent);
  }
  
}
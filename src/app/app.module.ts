import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactModalContent } from './add-contact-modal-content/add-contact-modal-content.component';
import { EditContactModalContentComponent } from './edit-contact-modal-content/edit-contact-modal-content.component';

import { SearchPipePipe } from './pipes/search-fname-pipe.pipe';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    SearchContactComponent,
    ContactListComponent,
    AddContactModalContent,
    EditContactModalContentComponent,
    SearchPipePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

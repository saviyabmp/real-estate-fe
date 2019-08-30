import { Component, OnInit } from '@angular/core';
import { HelloworldService } from '../helloworld/helloworld.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  message: MessageModel;
  name: String = "";

  contacts;
  selectedContact;
  contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};
  dataService : DataService;

  constructor(private data: HelloworldService) { }

  ngOnInit() {
      this.dataService = new DataService();
      this.contacts = this.dataService.getContacts();
  }

  onInput(event: any) {
    this.name =  event.target.value;
  }

  onClick(){
    this.data.getJSONResponse(this.name).subscribe(data => {this.message = data;});
  }

  public selectContact(contact){
    this.selectedContact = contact;
  }

  createContact(){
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = {id: null, name: "", description: "", email: ""};

  }
}

export class MessageModel {
    id: number;
    content: string;
    constructor(private _id: number, public message: string) {
        this.id = _id;
        this.content = message;
    }
}

export class DataService {

  contacts = [
    {id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com"},
    {id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com"},
    {id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com"},
    {id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com"}
  ];

  constructor() { }

  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
}
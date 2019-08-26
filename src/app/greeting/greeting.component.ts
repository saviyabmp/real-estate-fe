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

  constructor(private data: HelloworldService) { }

  ngOnInit() {}

  onInput(event: any) {
    this.name =  event.target.value;
  }

  onClick(){
    this.data.getJSONResponse(this.name).subscribe(data => {this.message = data;});
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
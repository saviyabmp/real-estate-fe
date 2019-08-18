import { Component, OnInit } from '@angular/core';
import { HelloworldService } from '../helloworld/helloworld.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: MessageModel;

  constructor(private data: HelloworldService) { }

  ngOnInit() {
    this.data.getJSONResponse().subscribe(data => {
      this.message = data;
    })
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

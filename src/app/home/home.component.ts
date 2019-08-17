import { Component, OnInit } from '@angular/core';
import { HelloworldService } from '../helloworld/helloworld.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: Object;

  constructor(private data: HelloworldService) { }

  ngOnInit() {
    this.data.getJSONResponse().subscribe(data => {
      this.message = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { LandAdService, LandAdModel } from '../land_ad_service/land-ad.service';

@Component({
  selector: 'app-land-buyer',
  templateUrl: './land-buyer.component.html',
  styleUrls: ['./land-buyer.component.scss']
})
export class LandBuyerComponent implements OnInit {

  ads: LandAdModel[];
  constructor(private adService: LandAdService) {
      this.ads = adService.getAll();
   }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LandAdService {

  private store: AdStore = new AdStore();

  constructor() {}

  createAd(ad: LandAdModel) {
      this.store.ads.push(ad);
  }

  getAd(id): LandAdModel {
      return this.store.ads.pop();
  }

  getAll(): LandAdModel[] {
      return this.store.ads;
  }

  updateAd() {}

  deleteAd() {}
}

/* Model interface for Land Ad */
export interface LandAdModel {

     id: number;
     imageUrl: string;
     price: number;
     description: string;
     location: string;
}

export class AdStore {
    //same as ads: Array<LandAdModel> = new Array();
  ads: LandAdModel[] = [];

  constructor() {
      this.ads = [
          {
            id: 0,
            imageUrl: "https://d2zj7tzv8omdiw.cloudfront.net/brentwoodhp/wp-content/uploads/2018/09/35123961_10213997271639140_7560978543774007296_n-1.jpg",
            price: 10000,
            description: "",
            location: "",
          }, {
            id: 1,
            imageUrl: "https://photos.zillowstatic.com/p_h/ISif3knegpiwky0000000000.jpg",
            price: 12000,
            description: "",
            location: "",
          }, {
            id: 2,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/SouthForkFront.jpg/1200px-SouthForkFront.jpg",
            price: 15500,
            description: "",
            location: "",
          }, {
            id: 3,
            imageUrl: "https://homeslandcountrypropertyforsale.com/farms/wp-content/uploads/2019/08/d0b108b5-1cdd-4cf1-b09d-ed2050fc1223-525x328.jpg",
            price: 19000,
            description: "",
            location: "",
          }, {
            id: 4,
            imageUrl: "https://lid.zoocdn.com/645/430/1fd916b5d3b85812d0f6ac98b3f892248fbf8c43.jpg",
            price: 20000,
            description: "",
            location: "",
          }, {
            id: 5,
            imageUrl: "https://cdn.ranchflip.com/photos/177592/lake-front-home-tn-acreage-middleton-hardeman-county-tennessee-177592-kLe4K3.jpg",
            price: 25000,
            description: "",
            location: "",
          }]}
}
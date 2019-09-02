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
            imageUrl: "",
            price: 10000,
            description: "",
            location: "",
          }, {
            id: 1,
            imageUrl: "",
            price: 12000,
            description: "",
            location: "",
          }, {
            id: 2,
            imageUrl: "",
            price: 15500,
            description: "",
            location: "",
          }, {
            id: 3,
            imageUrl: "",
            price: 19000,
            description: "",
            location: "",
          }, {
            id: 4,
            imageUrl: "",
            price: 20000,
            description: "",
            location: "",
          }, {
            id: 5,
            imageUrl: "",
            price: 25000,
            description: "",
            location: "",
          }]}
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    slidesPerView: 2.2,
  };

  slideOpts1 = {
    slidesPerView: 1.3,
  };
  popularDogs: any [] = [];

  constructor(private router: Router, public apiService: ApiService) { }

  findShiba(popularDogs: any []) {
    return popularDogs.filter(popularDogs => popularDogs.breed == 'Shiba Inu');
  }
  locBats(popularDogs: any []) {
    return popularDogs.filter(popularDogs => popularDogs.location == 'Batangas City');
  }

  createListing() {
    this.router.navigate(['/tabs/create-listing']);
  }
  search() {
    this.router.navigate(['/tabs/search']);
  }
  ngOnInit() {
    this.popularDogs = this.apiService.popularDogs;
  }

}

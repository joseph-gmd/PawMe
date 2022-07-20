import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  popularDogs: any[] = [
    {id: 1, name: 'Archie', breed:'Pomeranian', gender: 'Male', age: 3, size: 'small', img: 'assets/dogs/pom1.jfif'},
    {id: 2, name: 'Luna', breed:'Shiba Inu', gender: 'Female', age: 4, size: 'medium', img: 'assets/dogs/shiba1.jpg'},
    {id: 3, name: 'Bogart', breed:'American Bully', gender: 'Male', age: 2, size: 'medium', img: 'assets/dogs/bully1.jpg'},
    {id: 4, name: 'Eugene', breed:'Shiba Inu', gender: 'Male', age: 3, size: 'medium', img: 'assets/dogs/shiba2.jpg'}
  ];

  constructor(private router : Router) { }

  findShiba(popularDogs: any []) {
    return popularDogs.filter(popularDogs => popularDogs.breed == 'Shiba Inu');
  }

  createListing() {
    this.router.navigate(['/tabs/create-listing'])
  }
  ngOnInit() {
  }

}

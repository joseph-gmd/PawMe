import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.page.html',
  styleUrls: ['./create-listing.page.scss'],
})
export class CreateListingPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/tabs/home'])
  }
}

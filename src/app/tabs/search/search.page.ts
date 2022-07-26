import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private router: Router, public apiService: ApiService) { }

  searchTerm: string;
  popularDogs: any [] = [];

  ngOnInit() {
    this.popularDogs = this.apiService.popularDogs;
  }
  home() {
    this.router.navigate(['/tabs/home']);
  }
}

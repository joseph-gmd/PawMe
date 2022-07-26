import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
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
  isOpen = false;

  constructor(private router: Router, public apiService: ApiService, public actionSheetCtrl: ActionSheetController) { }

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

  async lpEvent() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share-social'
        }, {
          text: 'Favorite',
          icon: 'bookmark'
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ],
      animated: true,
      backdropDismiss: false,
      keyboardClose: true,
    });
    actionSheet.present();
  }
}

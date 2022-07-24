import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.page.html',
  styleUrls: ['./create-listing.page.scss'],
})
export class CreateListingPage implements OnInit {

  constructor(private router: Router, private loadingCtrl: LoadingController, private navCtrl: NavController) { }

  private loading;
  
  ngOnInit() {
  }

  home() {
    this.router.navigate(['/tabs/home'])
  }
  
  publish() {
    this.loadingCtrl.create({
      message: 'Uploading...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.navigateRoot('/tabs/home');
    }, 3000
    );
  }
}

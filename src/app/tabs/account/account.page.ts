import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router, private loadingCtrl: LoadingController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  private loading;
  
  signOut() {
    this.loadingCtrl.create({
      message: 'Logging Out...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.navigateRoot('/login');
    }, 1000
    );
  }

  accountInfo() {
    this.router.navigate(['/tabs/account-info']);
  }
  settings() {
    this.router.navigate(['/tabs/settings']);
  }
}

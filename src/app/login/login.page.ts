import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private loadingCtrl: LoadingController, private navCtrl: NavController) { }
  
  private loading;

  ngOnInit() {
  }

  userRegister() {
    this.router.navigate(['/register']);
  }
  home() {
    this.loadingCtrl.create({
      message: 'Logging In...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.navigateRoot('/tabs');
    }, 1000
    );
  }
}

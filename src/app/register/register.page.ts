import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  RegisterForm: FormGroup;

  fnamefromuser: any;
  addressfromuser: any;
  cnumfromuser: any;
  emailfromuser: any;
  passwordfromuser: any;

  constructor(private router: Router, private loadingCtrl: LoadingController, private navCtrl: NavController) { }

  ngOnInit() {

    this.RegisterForm = new FormGroup ({
      fname: new FormControl('', [
        Validators.required,
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
      cnum: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });

  }

  private loading;

  userLogin() {
    this.router.navigate(['/login']);
  };
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
    }, 3000
    );
  }
}

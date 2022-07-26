import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {

  EditForm: FormGroup;

  fnamefromuser: any;
  addressfromuser: any;
  cnumfromuser: any;
  emailfromuser: any;
  passwordfromuser: any;

  constructor(private router: Router, private navCtrl: NavController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.EditForm = new FormGroup ({
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

  account() {
      this.router.navigate(['/tabs/account']);
  }
  saveEdit() {
    this.loadingCtrl.create({
      message: 'Saving...'
    }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.navigateRoot('/tabs/account-info');
    }, 2000
    );
  }
}

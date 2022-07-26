import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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

  constructor(private router: Router) { }

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

  account() {
      this.router.navigate(['/tabs/account']);
  }
}

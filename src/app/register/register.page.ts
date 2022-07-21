import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private router: Router) { }

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

  userLogin() {
    this.router.navigate(['/login']);
  };
  home() {
    this.router.navigate(['/tabs']);
  };
}

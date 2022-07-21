import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.scss'],
})
export class ListingFormComponent implements OnInit {

  ListingForm: FormGroup;

  namefromuser: any;
  breedfromuser: any;
  agefromuser: any;
  locationfromuser: any;
  genderfromuser: string;
  sizefromuser: string;

  constructor() { }

  ngOnInit() {
    
    this.ListingForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      breed: new FormControl('', [
        Validators.required,
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(30)
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      size: new FormControl('', [
        Validators.required
      ])
    });

  }
}

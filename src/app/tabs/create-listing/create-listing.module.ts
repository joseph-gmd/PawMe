import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateListingPageRoutingModule } from './create-listing-routing.module';

import { CreateListingPage } from './create-listing.page';
import { ListingFormComponent } from '../listing-form/listing-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateListingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateListingPage, ListingFormComponent]
})
export class CreateListingPageModule {}

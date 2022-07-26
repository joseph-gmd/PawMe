import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountInfoPageRoutingModule } from './account-info-routing.module';

import { AccountInfoPage } from './account-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AccountInfoPage]
})
export class AccountInfoPageModule {}

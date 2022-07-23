import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private apiService:  ApiService
  ) { }

  ngOnInit() {
  }

}

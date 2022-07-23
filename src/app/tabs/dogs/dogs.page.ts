import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage implements OnInit {

  dog: any;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private apiService:  ApiService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(take(1)).subscribe(paramMap => {
      console.log(paramMap);
      if(!paramMap.has('id')) {
        this.navCtrl.back();
        return;
      }
      const id = paramMap.get('id');
      console.log(id);
      this.dog = this.apiService.getDogs(id);
      console.log(this.dog);
    })
  }

}

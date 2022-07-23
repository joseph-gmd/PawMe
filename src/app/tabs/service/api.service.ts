import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  popularDogs: any[] = [
    {id: 1, name: 'Archie', breed:'Pomeranian', gender: 'Male', age: 3, size: 'small', location: 'Lipa City', img: 'assets/dogs/pom1.jfif'},
    {id: 2, name: 'Luna', breed:'Shiba Inu', gender: 'Female', age: 4, size: 'medium', location: 'Batangas City', img: 'assets/dogs/shiba1.jpg'},
    {id: 3, name: 'Bogart', breed:'American Bully', gender: 'Male', age: 2, size: 'medium', location: 'Batangas City', img: 'assets/dogs/bully1.jpg'},
    {id: 4, name: 'Eugene', breed:'Shiba Inu', gender: 'Male', age: 3, size: 'medium', location: 'Rosario', img: 'assets/dogs/shiba2.jpg'},
    {id: 5, name: 'Chowder', breed:'Chow Chow', gender: 'Female', age: 5, size: 'medium', location: 'Lipa City', img: 'assets/dogs/chowder.jpg'}
  ];

  constructor() { }

  getDogs(id) {
    const dog = this.popularDogs.find(x => x.id == id);
    return dog;
  }
}

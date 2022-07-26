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
    {id: 5, name: 'Chowder', breed:'Chow Chow', gender: 'Female', age: 5, size: 'medium', location: 'Lipa City', img: 'assets/dogs/chowder.jpg'},
    {id: 6, name: 'Buster', breed:'Chihuahua', gender: 'Male', age: 1, size: 'small', location: 'Batangas City', img: 'assets/dogs/chihuahua.jpg'},
    {id: 7, name: 'Cerberus', breed:'Pitbull', gender: 'Female', age: 2, size: 'big', location: 'Tanauan City', img: 'assets/dogs/pit.jpg'},
    {id: 8, name: 'Archie', breed:'Pug', gender: 'Female', age: 3, size: 'small', location: 'Batangas City', img: 'assets/dogs/pug.jpg'},
    {id: 9, name: 'Chimmy', breed:'Aspin', gender: 'Female', age: 4, size: 'medium', location: 'Taal', img: 'assets/dogs/aspin.jpg'},
    {id: 10, name: 'Sevii', breed:'Aspin', gender: 'Male', age: 3, size: 'medium', location: 'San Juan', img: 'assets/dogs/aspin1.jpg'},
  ];

  constructor() { }

  getDogs(id) {
    const dog = this.popularDogs.find(x => x.id == id);
    return dog;
  }
}

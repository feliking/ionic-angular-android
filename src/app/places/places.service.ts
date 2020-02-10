import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1200px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://www.ambientum.com/wp-content/uploads/2018/03/estatua-libertad-696x464.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageURL: 'https://www.ambientum.com/wp-content/uploads/2018/03/estatua-libertad-696x464.jpg',
      comments: []
    }
  ];

  constructor() { }

  getPlaces(){
    return [...this.places];
  }

  getPlace(placeId: string){
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId
    });
  }

  
}

import { Restaurant } from "../shared/Restaurant";
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class RestaurantService{
    constructor(){
        if(!localStorage.getItem('restaurants')) {
            let restaurants = [{
                "id": 1,           
                "name": "Jollof Africa",
                "type": "African",
                "image": "assets/images/HomeJollofAfrica.jpeg",
                "rating": 5.0,
                "distance": 2.36,
                "deal": "R250 for two",
                "price": 250,
                "timeaway": 25
            },
            {
                "id": 2,           
                "name": "Spice-The Indian Kitchen",
                "type": "Indian",
                "image": "assets/images/HomeSpice.jpeg",
                "rating": 4.5,
                "distance": 1.5,
                "deal": "R100 for one",
                "price": 250,
                "timeaway": 5
            },
            {
                "id": 3,           
                "name": "Holy Dough",
                "type": "Italian",
                "image": "assets/images/HomeHolyDough.jpeg",
                "rating": 4.9,
                "distance": 1.6,
                "deal": "2 Medium Pizza's for R170",
                "price": 170,
                "timeaway": 5
            },
            {
                "id": 4,           
                "name": "Kung Fu Kitchen",
                "type": "Chinese",
                "image": "assets/images/HomeKungFuKitchen.jpeg",
                "rating": 3.5,
                "distance": 4.5,
                "deal": "Chicken Fried Rice for R75",
                "price": 75,
                "timeaway": 30
            }]
        }
    }
    getrestaurants(): Observable<any[]> {
        let restaurants:any[]=[]
        if (localStorage.getItem('restaurants'))
        {
          restaurants = JSON.parse(localStorage.getItem('restaurants')!)
        }
        return of(restaurants)
    }
    getrestaurant(id:number): Observable<any>{
        let restaurants:Restaurant[]  = [];

        if (localStorage.getItem('restaurants'))
        {
            restaurants = JSON.parse(localStorage.getItem('restaurants')!)
        }

        let restaurant:any = restaurants.find(restaurant => restaurant.id === id)

        return of(restaurant)
    }
  }
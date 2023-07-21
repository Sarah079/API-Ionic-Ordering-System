import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
//error handling 
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

//for loop
import { Restaurant } from '../shared/Restaurant';
import { cart } from '../shared/cart';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule,NgFor],
})

export class Tab1Page {
  
  constructor() {}

  restaurants:  Restaurant[] = [];
  cartitems!: cart;

  ngOnInit()
  {
    //parse restaurant
    this.restaurants = JSON.parse( localStorage.getItem('restaurants')!);
    //parse cartitems
    this.cartitems = JSON.parse(localStorage.getItem('cartitems')!);

    this.checkrestaurantitems();
    this.checkcartitems();
  }
  //make sure to push data if there is none 
  checkrestaurantitems(){
    if(this.restaurants == null)
    {
      this.restservice();
      //add data to local storage
      localStorage.setItem('restaurants', JSON.stringify(this.restaurants));
      console.log(this.restaurants);
    }
  }
  //add data to list
  restservice()
  {
    this.restaurants = [];
    //Jollof africa
    let JollofAfrica = new Restaurant(); JollofAfrica.id = 1;JollofAfrica.name = "Jollof Africa";
        JollofAfrica.type = "African"; JollofAfrica.image = "assets/images/HomeJollofAfrica.jpeg"
        JollofAfrica.rating = 5.0;JollofAfrica.distance = 2.36;
        JollofAfrica.deal="R250 for two" ;JollofAfrica.price = 250; JollofAfrica.timeaway = 25;
    this.restaurants.push(JollofAfrica);
    //spice
    let SpiceIndianKitchen = new Restaurant(); SpiceIndianKitchen.id = 2;SpiceIndianKitchen.name = "Spice - The Indian Kitchen";
        SpiceIndianKitchen.type = "Indian"; SpiceIndianKitchen.image = "assets/images/HomeSpice.jpeg"
        SpiceIndianKitchen.rating = 4.5;SpiceIndianKitchen.distance = 1.5;
        SpiceIndianKitchen.deal="R100 for one" ;SpiceIndianKitchen.price = 250; SpiceIndianKitchen.timeaway = 5;
    this.restaurants.push(SpiceIndianKitchen);
    //holy dough
    let HolyDough = new Restaurant(); HolyDough.id = 3;HolyDough.name = "Holy Dough";
        HolyDough.type = "Italian"; HolyDough.image = "assets/images/HomeHolyDough.jpeg"
        HolyDough.rating = 4.9;HolyDough.distance = 1.6;
        HolyDough.deal="2 Medium Pizza's for R170" ;HolyDough.price = 170; HolyDough.timeaway = 5;
    this.restaurants.push(HolyDough);
    //yamakodo
    let Yamakodo = new Restaurant(); Yamakodo.id = 4;Yamakodo.name = "Kung Fu Kitchen";
        Yamakodo.type = "Chinese"; Yamakodo.image = "assets/images/HomeKungFuKitchen.jpeg"
        Yamakodo.rating = 3.5;Yamakodo.distance = 4.5;
        Yamakodo.deal="Chicken Fried Rice for R75" ;Yamakodo.price = 75; Yamakodo.timeaway = 30;
    this.restaurants.push(Yamakodo);
  }

  checkcartitems(){
    //checking if no cartitems exists
    if(this.cartitems == null){
      this.cartitems = new cart();
    }
  }
  
  addTocartitems(item:Restaurant)
  {
    this.cartitems.Restaurant = item;
    this.saveCart();    
    this.reloadPage();
  }

  saveCart()
  {
    localStorage.removeItem('cartitems');
    localStorage.setItem('cartitems',JSON.stringify(this.cartitems));
    console.log(this.cartitems);
  }
  reloadPage(){
    window.location.reload()
  }
}

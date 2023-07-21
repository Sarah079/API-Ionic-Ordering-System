import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
//for search functionality
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Restaurant } from '../shared/Restaurant';
import { cart } from '../shared/cart';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, FormsModule, Ng2SearchPipeModule]
})
export class Tab2Page {
  
  constructor() {  }
  restaurants:  Restaurant[] = [];
  filterTerm: string = "";
  cartitems!: cart;
  filteredrestaurants:  Restaurant[] = [];

  ngOnInit(){  
    //get restaurants
     this.restaurants = JSON.parse( localStorage.getItem('restaurants')!); 
    
     //get cart
    this.cartitems = JSON.parse(localStorage.getItem('cartitems')!);

    //get searched restaurants
    if(this.filterTerm==""){
      this.filteredrestaurants = this.restaurants;
    }
   }

   //onclick search function
   search(){
    //empty array
    this.filteredrestaurants = [];

    //filter items
    this.filteredrestaurants = this.restaurants.filter((searchitem)=>
      searchitem.name.toLocaleLowerCase().includes(this.filterTerm.toLocaleLowerCase())||
      searchitem.type.toLocaleLowerCase().includes(this.filterTerm.toLocaleLowerCase())||
      searchitem.rating == Number(this.filterTerm)||
      searchitem.distance == Number(this.filterTerm)||
      searchitem.price == Number(this.filterTerm)
    );
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


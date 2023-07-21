import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
//for modal
import { ModalController} from '@ionic/angular'; 
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { cart } from '../shared/cart';
import { Restaurant } from '../shared/Restaurant';
import { customer } from '../shared/customer';
import { orders } from '../shared/orders';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule,NgFor],
})

export class Tab3Page  implements OnInit{
  @ViewChild(IonModal) modal!: IonModal
  cartitems!: cart;  
  customers: customer[] = [];
  order!: orders;
  constructor(public modalCtrl: ModalController) {}  
  
  ngOnInit() {  
    
    //parse cartitems
    this.cartitems = JSON.parse(localStorage.getItem('cartitems')!);
    //parse cartitems
    this.customers = JSON.parse(localStorage.getItem('customers')!);
    //this.clearCart();
    this.getcart();
    
  }  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
  getcart(){
    return this.cartitems;
  }

  // Clear the cart
  clearCart() {
      localStorage.removeItem('cartitems');
  }

  OrderHistory(item:Restaurant)
   { 
      //this.cartitems.Restaurant = item;
      //const items = localStorage.getItem('cartitems');
      if (item) {
      this.order.Restaurant = item;
      localStorage.setItem('order',JSON.stringify(this.order));
      console.log(this.order);
    }
   }
   
   reloadPage(){
    window.location.reload()
  }
}

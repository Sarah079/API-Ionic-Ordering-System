import { Component, OnInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { orders } from '../shared/orders';
import { Restaurant } from '../shared/Restaurant';
import { cart } from '../shared/cart';
import { customer } from '../shared/customer';
//for modal
import { ModalController} from '@ionic/angular'; 
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})

export class Tab4Page implements OnInit{
  constructor(public modalCtrl: ModalController) {}  
  @ViewChild(IonModal) modal!: IonModal
  customers: customer[] = [];
  //customers!: customer;
  //order!: orders;
  order: orders[] = [];
  ngOnInit() {  
    //parse cartitems
    this.customers = JSON.parse(localStorage.getItem('customers')!);
    this.order = JSON.parse(localStorage.getItem('order')!);
    this.checkorders();
    this.checkcustomer();

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

  checkcustomer(){
    if(this.customers == null)
    {
      this.custservice();
      //add data to local storage
      localStorage.setItem('customers', JSON.stringify(this.customers));
      console.log(this.customers);
    }
  }

  custservice(){
    this.customers = [];
    //this customer
    let cust1 = new customer(); cust1.id = 1; cust1.name = "Sarah"; cust1.surname = "Pickering"; 
    cust1.email = "u19032618@tuks.co.za"; cust1.homeadress = "1 Waterloo street, Abba city, Mamma mia province, 0123"; 
    cust1.workadress = "2 Africa, ToTo city, Rain Province, 0321"; cust1.phoneno = "0798196160"; 
        
    this.customers.push(cust1);
  }
  savecustomer(){
    localStorage.setItem('customers', JSON.stringify(this.customers));
    console.log(this.customers);
  }

  checkorders(){
    if(this.order == null)
    {
      //add data to local storage
      this.order = JSON.parse(localStorage.getItem('order')!);      
      console.log(this.order);
    }
    else{
      this.getorders();
    }
  }

  getorders(){
    return this.order;
  }
}




import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import * as ko from "knockout";
import { Cart, CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {
  
  
  // cart = ko.observable({});
  cart:ko.Observable;
  prods:Product[] = [];
  //inCart = {};
    
  constructor(private cartService:CartService) { 
    
  }

  ngOnInit() {
    this.prods = this.cartService.products();
    this.cart = this.cartService.cart;
    //this.inCart = this.cart();
  }

  purchased(id: string) {
    this.cartService.Purchase(id);return;
  }

  
  

}

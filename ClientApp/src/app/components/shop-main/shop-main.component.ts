
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import * as ko from "knockout";
import { Cart, CartItem } from 'src/app/models/cart';



@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {
  
  products = ko.observableArray<Product>(
  [
    { id: "fakeId_1", active: true, name: "ON Whey", price: 45.99, image: "assets/image/whey.jpeg", description: "Description" },
    { id: "fakeId_2", active: true, name: "Xbox", price: 499.99, image: "assets/image/xbox.jpg", description: "Description" },
    { id: "fakeId_3", active: true, name: "Oatmeal", price: 10, image: "assets/image/oatmeal.jpg", description: "Description" },
    { id: "fakeId_4", active: true, name: "Sneakers", price: 23.99, image: "assets/image/sneakers.jpg", description: "Description" },
    { id: "fakeId_5", active: true, name: "Candle", price: 5.50, image: "assets/image/candle.jpg", description: "Description" },
    { id: "fakeId_6", active: true, name: "Lamp", price: 89.99, image: "assets/image/lamp.jpg", description: "Description" },
    { id: "fakeId_7", active: true, name: "Samsung TV", price: 760.99, image: "assets/image/samsung.jpg", description: "Description" },
    { id: "fakeId_8", active: true, name: "Salt & Pepper", price: 3.99, image: "assets/image/salt-pepper.jpg", description: "Description" },
    { id: "fakeId_9", active: true, name: "Dishwasher", price: 599, image: "assets/image/dishwasher.jpg", description: "Description" },
    { id: "fakeId_10", active: true, name: "Frame", price: 12.99, image: "assets/image/frame.jpg", description: "Description" },
  ]);
  cart = ko.observable({});
  prods:Product[] = [];
  inCart = {};
    
  constructor() { }

  ngOnInit() {
    this.prods = this.products();
    this.inCart = this.cart();
  }

  purchased(id: string) {
    var c = this.cart();
    if(Object.keys(c).indexOf(id)>-1){
      c[id] = c[id] + 1;
    }else{
      c[id] = 1;
    }
    this.cart(c);
  }

  get inCartKeys(){
    return Object.keys(this.cart());
  }
  get inCartTotatl(){
    debugger;
    let c = this.cart();
    let total = 0;
    Object.keys(c).forEach(element => {
      total += c[element];
    });
    return total;
  }

}

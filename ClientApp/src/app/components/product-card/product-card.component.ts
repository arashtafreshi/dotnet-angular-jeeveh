import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import * as ko from "knockout";
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Output() onPurchased = new EventEmitter();
  //@Output() onIncreased = new EventEmitter();
  //@Output() onDecreased = new EventEmitter();

  //@Input() cart:ko.Observable;
  cart:ko.Observable;
  @Input() product:Product;
  // product:Product = {
  //   active:true,
  //   description:"some description",
  //   id:"fakeId",
  //   image:"assets/image/main-body.jpg",
  //   name:"sample name",
  //   price:10.99
  // };

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

  clickedBuy(){
    this.onPurchased.emit(this.product.id);
  }

  increase(){
    console.log("increased");
    let c = this.cart();
    if(Object.keys(this.cart()).indexOf(this.product.id) > -1){
      c[this.product.id] += 1;
    }else{
      c[this.product.id] = 1;
    }
    this.cart(c);
    //this.onIncreased.emit(this.product.id);
  }

  get counts(){
    if(typeof this.cart === 'undefined') return "N/A";
    let c = this.cart();
    if(Object.keys(c).indexOf(this.product.id) > -1) return c[this.product.id];
    return 0;
  }

  decrease(){
    console.log("decrease");
    let c = this.cart();
    if(Object.keys(c).indexOf(this.product.id) > -1){
      c[this.product.id] -= 1;
      if(c[this.product.id] === 0){
        delete c[this.product.id];
      }
    }else{
      delete c[this.product.id];
    }
    this.cart(c);
    //this.onDecreased.emit(this.product.id);
  }

}

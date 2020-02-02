import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Output() onPurchased = new EventEmitter();
  @Input() product:Product;
  // product:Product = {
  //   active:true,
  //   description:"some description",
  //   id:"fakeId",
  //   image:"assets/image/main-body.jpg",
  //   name:"sample name",
  //   price:10.99
  // };

  constructor() { }

  ngOnInit() {
  }

  clickedBuy(){
    this.onPurchased.emit(this.product.id);
  }

}

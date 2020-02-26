import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.css']
})
export class CartMainComponent implements OnInit {
  
  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

  GetProduct(id:String):Product{
    debugger;
    var prod = this.cartService.products().filter(x=>x.id === id);
    if(prod.length>0){
      return prod[0];
    }else{
      return null;
    }
  }

  get productIdsInCart(){
    return Object.keys(this.cartService.cart());
  }

  GetTotalPrice():string{
    let total = 0;
    let cart = this.cartService.cart();
    Object.keys(cart).forEach(id => {
      debugger;
      total += cart[id]*this.GetProduct(id).price;
    });
    return total.toFixed(2);
  }

}

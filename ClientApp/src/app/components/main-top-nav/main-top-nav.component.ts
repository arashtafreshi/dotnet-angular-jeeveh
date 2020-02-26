import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-main-top-nav',
  templateUrl: './main-top-nav.component.html',
  styleUrls: ['./main-top-nav.component.css']
})
export class MainTopNavComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit() {

  }

  get inCartTotatl(){
    if(typeof this.cartService.cart === 'undefined') return "N/A";
    let c = this.cartService.cart()
    let total = 0;
    Object.keys(c).forEach(element => {
      total += c[element];
    });
    return total;
  }

  get inCartKeys(){
    return Object.keys(this.cartService.cart());
  }

}

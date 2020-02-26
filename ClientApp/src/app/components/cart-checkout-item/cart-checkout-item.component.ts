import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-checkout-item',
  templateUrl: './cart-checkout-item.component.html',
  styleUrls: ['./cart-checkout-item.component.css']
})
export class CartCheckoutItemComponent implements OnInit {
  @Input() product:Product;
  @Input() count:number;
  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

  removeFromCart(){
    this.cartService.RemoveFromCart(this.product.id);
  }

}

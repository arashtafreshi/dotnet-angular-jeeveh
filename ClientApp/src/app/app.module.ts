import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MainTopNavComponent } from './components/main-top-nav/main-top-nav.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { UploadImageButtonComponent } from './components/upload-image-button/upload-image-button.component';
import { ShopMainComponent } from './components/shop-main/shop-main.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartMainComponent } from './components/cart-main/cart-main.component';
import { CartCheckoutItemComponent } from './components/cart-checkout-item/cart-checkout-item.component';
import { PaymentMainComponent } from './components/payment-main/payment-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MainTopNavComponent,
    MainBodyComponent,
    UploadImageButtonComponent,
    ShopMainComponent,
    ProductCardComponent,
    CartMainComponent,
    CartCheckoutItemComponent,
    PaymentMainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainBodyComponent, pathMatch: 'full' },
      { path: 'shop', component: ShopMainComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'cart', component: CartMainComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

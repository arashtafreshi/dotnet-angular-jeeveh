import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutItemComponent } from './cart-checkout-item.component';

describe('CartCheckoutItemComponent', () => {
  let component: CartCheckoutItemComponent;
  let fixture: ComponentFixture<CartCheckoutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCheckoutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCheckoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

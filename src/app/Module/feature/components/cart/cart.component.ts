import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../../../../State/Cart/cart.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart = [1, 1, 1];
  cartItems: any;

  constructor(private router: Router,
    private cartService: CartService,
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.cartService.getCart()
    this.store.pipe(select((store) => store.cart)).subscribe((cart) => {
      this.cartItems = cart.cartItems
      console.log("Cart Data", cart.cartItems);

    });
  }

  navigateToCheckout() {
    this.router.navigate(["checkout"])
  }

}

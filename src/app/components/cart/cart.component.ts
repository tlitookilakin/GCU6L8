import { Component } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
	constructor(private cart:CartService) {}

	getCartItems() : CartItem[] {
		return this.cart.getItems();
	}

	checkout() : void {
		this.cart.checkout();
	}

	getCount() : number {
		return this.cart.getCount();
	}

	removeItem(id: number) : void {
		this.cart.removeFromCart(id);
	}
}

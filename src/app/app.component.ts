import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	constructor(private cart:CartService) {}

  	title = 'DonutShop';

	getCartCount() : number {
		return this.cart.getCount();
	}
}

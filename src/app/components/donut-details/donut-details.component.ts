import { Component, Input } from '@angular/core';
import { DonutDetails } from '../../models/donut-details';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DonutApiService } from '../../services/donut-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
	constructor(private route:ActivatedRoute, private cart:CartService, private api:DonutApiService) {}

	donut: DonutDetails = {} as DonutDetails;
	donutCount: number = 1;

	ngOnInit() {
		this.route.paramMap.subscribe(map => {
			this.api.getDonutDetails(Number.parseInt(map.get("id") ?? "0"))
				.subscribe(d => this.donut = d);
		});
	}

	addToCart() : void {
		this.cart.addToCart(this.donut.id, this.donutCount, this.donut.name);
		this.donutCount = 1;
	}
}

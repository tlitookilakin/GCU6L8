import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  items: CartItem[] = [];

  getItems() : CartItem[] {
	return this.items;
  }

  addToCart(id: number, count: number, name: string) {
	if (count <= 0) {
		return;
	}

	let existingIndex : number = this.items.findIndex(i => i.id === id);

	if (existingIndex === -1) {
		this.items.push({id: id, count: count, name: name});
	} else {
		this.items[existingIndex].count += count;
	}
  }

  removeFromCart(id: number) {
	let existingIndex : number = this.items.findIndex(i => i.id === id);

	if (existingIndex >= 0) {
		this.items.splice(existingIndex, 1);
	}
  }

  checkout() {
	this.items = [];
  }

  getCount() : number {
	let total = 0;
	for (const item of this.items) {
		total += item.count;
	}
	return total;
  }
}

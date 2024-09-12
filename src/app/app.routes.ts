import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
	{path: "", redirectTo: "/Donuts", pathMatch: "full"},
	{path:"Donuts", component: DonutsComponent},
	{path:"Donuts/:id", component: DonutDetailsComponent},
	{path:"Checkout", component: CartComponent},
	{path:"**", component: NotFoundComponent}
];

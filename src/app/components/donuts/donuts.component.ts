import { Component } from '@angular/core';
import { DonutList } from '../../models/donut-list';
import { DonutApiService } from '../../services/donut-api.service';
import { DonutItemComponent } from "../donut-item/donut-item.component";

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [DonutItemComponent],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  donuts: DonutList = {} as DonutList;

  constructor(private api:DonutApiService) {}

  ngOnInit() : void {
    this.api.getDonuts().subscribe(r => this.donuts = r);
  }
}

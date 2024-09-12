import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donut-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut-item.component.html',
  styleUrl: './donut-item.component.css'
})
export class DonutItemComponent {
  @Input() donut: Donut = {} as Donut;
}

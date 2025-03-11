import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './bags.component.html',
  styleUrl: './bags.component.scss',
})
export class BagsComponent {}

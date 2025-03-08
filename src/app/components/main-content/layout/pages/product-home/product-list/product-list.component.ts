import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../../../shared/services/products.service';
import { map, pipe, tap } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Product } from '../../../../../shared/models/product.interface';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  public productService = inject(ProductsService);

  public products: Product[] = [];

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    return this.productService
      .getAllProducts()
      .pipe(tap((res) => (this.products = res)))
      .subscribe();
  }
}

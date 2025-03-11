import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { ProductsService } from '../../../../../shared/services/products.service';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.scss',
})
export class SubCategoryComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductsService);

  public subProducts: any;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap((params) => params),
        switchMap((params) =>
          this.productService.getProductBySubCategory(params['id'])
        ),
        map((data: any) => (this.subProducts = data))
      )
      .subscribe();

    console.log('DATA', this.subProducts);
  }
}

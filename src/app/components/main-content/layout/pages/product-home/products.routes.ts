import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./product-home.component').then((c) => c.ProductHomeComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./product-list/product-list.component').then(
            (c) => c.ProductListComponent
          ),
      },
      {
        path: 'bags',
        loadComponent: () =>
          import('../product-home/bags/bags.component').then(
            (c) => c.BagsComponent
          ),
      },
      {
        path: 'bags/:id',
        loadComponent: () =>
          import('../product-home/sub-category/sub-category.component').then(
            (c) => c.SubCategoryComponent
          ),
      },
      {
        path: 'bags/1',
        loadComponent: () =>
          import(
            '../product-home/product-details/product-details.component'
          ).then((c) => c.ProductDetailsComponent),
      },
      {
        path: 'cosmetics',
        loadComponent: () =>
          import('../product-home/cosmetics/cosmetics.component').then(
            (c) => c.CosmeticsComponent
          ),
      },
      {
        path: 'dress',
        loadComponent: () =>
          import('../product-home/dress/dress.component').then(
            (c) => c.DressComponent
          ),
      },
      {
        path: 'accessories',
        loadComponent: () =>
          import('../product-home/accessories/accessories.component').then(
            (c) => c.AccessoriesComponent
          ),
      },
    ],
  },
];

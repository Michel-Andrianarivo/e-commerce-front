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

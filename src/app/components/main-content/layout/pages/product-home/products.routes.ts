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
    ],
  },
];

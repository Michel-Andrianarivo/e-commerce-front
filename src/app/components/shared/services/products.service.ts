import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = 'http://localhost:3000';

  http = inject(HttpClient);

  constructor() {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/product`);
  }

  getProductBySubCategory(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/product/category/${id}`);
  }
}

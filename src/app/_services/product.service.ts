import { Injectable } from '@angular/core';
// import { productlist } from '../_models/productlist';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Product } from '@app/_models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productSubject: BehaviorSubject<Product>;
  public product: Observable<Product>;

  constructor(private router: Router, private http: HttpClient) {
    this.productSubject = new BehaviorSubject<Product>(JSON.parse(localStorage.getItem('product')));
    this.product = this.productSubject.asObservable();
  }

  public get productValue(): Product {
    return this.productSubject.value;
  }

  register(product: Product) {
      return this.http.post(`${environment.apiUrl}/products/register`, product);
  }

  getAll() {
      return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getById(product_id: string) {
      return this.http.get<Product>(`${environment.apiUrl}/products/${product_id}`);
  }

  update(product_id, params) {
      return this.http.put(`${environment.apiUrl}/products/${product_id}`, params)
          .pipe(map(x => {
              // update stored product if the logged in product updated their own record
              if (product_id == this.productValue.product_id) {
                  // update local storage
                  const product = { ...this.productValue, ...params };
                  localStorage.setItem('product', JSON.stringify(product));

                  // publish updated product to subscribers
                  this.productSubject.next(product);
              }
              return x;
          }));
  }

  delete(product_id: string) {
      return this.http.delete(`${environment.apiUrl}/products/${product_id}`)
          .pipe(map(x => {
              return x;
          }));
  }


  // getProducts() {
  //   this.logger.log('Getting products ...');
  //   return productlist;
  // }

}

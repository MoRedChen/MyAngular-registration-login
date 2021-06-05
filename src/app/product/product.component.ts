import { Component, OnInit } from '@angular/core';

// 載入資料來源。
import { productlist } from './productlist';
import { Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products = null;

  // constructor() { }
  constructor(private router: Router, public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
            .pipe(first())
            .subscribe(products => this.products = products);
  }


  // id: '';
  // show(product): void {
  //   this.router.navigate(['/show'], {
  //     queryParams: {
  //       id: product.product_id,
  //     }
  //   });
  // }

    id: '';
    show(id): void {
    this.router.navigate(['/show'], {
        queryParams: {
          id: id,
        }
      });
    }

  // 變數productlists取得資料來源。
  // productlists = productlist;

  

}

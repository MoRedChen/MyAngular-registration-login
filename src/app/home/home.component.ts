import { Component } from '@angular/core';

import { User } from '../_models';
import { AccountService } from '@app/_services';

// 載入資料來源。
import { productlist } from '..//productlist';
import { Router } from '@angular/router';

@Component({ 
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
 })
export class HomeComponent {
    user: User;

    constructor(private router: Router, private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

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
    productlists = productlist;
}

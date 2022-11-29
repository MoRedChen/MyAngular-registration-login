import { Component, OnInit } from '@angular/core';

// 載入資料來源。
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products = null;
  p01 = 'p01';
  p02 = 'p02';

  // constructor() { }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }



    id: '';
    show(s_id): void {
    this.router.navigate(['/show'], {
        queryParams: {
          id: s_id,
        }
      });
    }




}

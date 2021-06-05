import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ProductService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    products = null;


    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getAll()
            .pipe(first())
            .subscribe(products => this.products = products);
    }

    deleteProduct(product_id: string) {
        const product = this.products.find(x => x.product_id === product_id);
        product.isDeleting = true;
        this.productService.delete(product_id)
            .pipe(first())
            .subscribe(() => this.products = this.products.filter(x => x.product_id !== product_id));
    }
}

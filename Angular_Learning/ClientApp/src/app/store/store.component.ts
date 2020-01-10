import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/product.model';
import { ProductRepository } from '../Models/product.repository';
import { StaticDataSource } from '../Models/static.datasource';
import { Cart } from '../Models/cart.model';
import { RestDataSource } from '../Models/rest.datasource';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    providers: [ProductRepository, StaticDataSource, RestDataSource]
})
/** store component*/
export class StoreComponent {
    public selectedCategory = null;
    public productPerPage = 3;
    public selectedPage = 1;

    constructor(private repository: ProductRepository, private cart: Cart, private router: Router, private rest: RestDataSource) {
    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productPerPage);
    }

    get categories(): String[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newPageSize: number) {
        this.productPerPage = Number(newPageSize);
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productPerPage))
            .fill(0).map((x, i) => i + 1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productPerPage);
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
    }
}

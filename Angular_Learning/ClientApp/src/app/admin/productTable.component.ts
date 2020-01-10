import { Component } from "@angular/core";
import { ProductRepository } from "../Models/product.repository";
import { Product } from "../Models/product.model";


@Component({
  moduleId: module.id,
  templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
  constructor(private repository: ProductRepository) { }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}

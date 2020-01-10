import { Component } from "@angular/core";
import { Cart } from "../Models/cart.model";

@Component({
    selector: "cart-summary",
    moduleId: module.id,
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent{
    constructor(public cart: Cart) { }
}

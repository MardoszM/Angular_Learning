import { Component } from '@angular/core';
import { Cart } from '../Models/cart.model';

@Component({
    moduleId: module.id,
    selector: 'app-cart-detail',
    templateUrl: './cart-detail.component.html'
})
/** CartDetail component*/
export class CartDetailComponent {
    /** CartDetail ctor */
    constructor(public cart: Cart) {

    }
}

import { Component } from '@angular/core';
import { OrderRepository } from '../Models/order.repository';
import { Order } from '../Models/order.model';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ["checkout.component.scss"]
})
/** checkout component*/
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository, public order: Order) { }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                order.clear();
                this.orderSent = true;
                this.submitted = false;
            })
        }
    }
}

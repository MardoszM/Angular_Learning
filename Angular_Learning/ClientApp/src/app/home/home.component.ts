import { Component } from '@angular/core';
import { Model, TodoItem } from "../Models/model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    model = new Model();

    getName() {
        return this.model.user;
    }

    getItems() {
        return this.model.items.filter(item => !item.done);
    }

    addItem(value) {
        this.model.items.push(new TodoItem(value, false));
    }
}

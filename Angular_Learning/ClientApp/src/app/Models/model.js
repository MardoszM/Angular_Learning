"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model() {
        this.user = "Adam";
        this.items = [new TodoItem("Kupic kwiaty", false),
            new TodoItem("Kupic buty", false),
            new TodoItem("Odebrac bilety", true),
            new TodoItem("Zadzwonic do Janka", false)];
    }
    return Model;
}());
exports.Model = Model;
var TodoItem = /** @class */ (function () {
    function TodoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=model.js.map
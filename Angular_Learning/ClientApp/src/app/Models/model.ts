export class Model {
    user;
    items;
    constructor() {
        this.user = "Adam";
        this.items = [new TodoItem("Kupic kwiaty", false),
        new TodoItem("Kupic buty", false),
        new TodoItem("Odebrac bilety", true),
        new TodoItem("Zadzwonic do Janka", false)]
    }
}

export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}

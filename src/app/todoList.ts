import {TodoItem} from "./todoItem";
export class TodoList {
    constructor(public user: string, private todoItems: TodoItem[] = []){

    }
    
    //readonly  = its value can't be changed once it has been assigned in the constructor or declaration
    //getter func
    // ()readonly todoitem[] = return type , array
    get items(): readonly TodoItem[]{
        return this.todoItems;
    }

    addItem(task: string) {
        this.todoItems.push(new TodoItem(task));
    }
}
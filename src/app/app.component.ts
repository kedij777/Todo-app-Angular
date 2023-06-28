import { Component } from '@angular/core';
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";



//decorator
@Component({
  //css selector, app-root = root component of an angular applications 
  selector: 'app-root',
  // path to htm,l
  templateUrl: './app.component.html',
  //array of css files that contains styles specfic to the compornet
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private list = new TodoList("Bob", [
    new TodoItem("Go for run", true),
    new TodoItem("Get flowers"),
    new TodoItem("collect tickets"),
  ]);

  get username() : string {
    return this.list.user;
  }

  get itemCount() : number { 
    //lambda, 
    //.fileter(..), filters the items array to only include items that are not complete
    return this.list.items.filter(item => !item.complete).length;
  }

  get items() : readonly TodoItem[]{
    return this.list.items.filter(item => !item.complete);
  }
  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }
}


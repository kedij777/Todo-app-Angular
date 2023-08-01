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
  showComplete: boolean = false;

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private list = new TodoList("Bob", [
    new TodoItem("Go for run"),
    new TodoItem("Get flowers"),
    new TodoItem("collect tickets"),
  ]);

  get username() : string {
    return this.list.user;
  }

  get itemCount() : number { 
    //lambda, 
    //.fileter(..), filters the items array to only include items that are not complete
    return this.list.items.filter(item => this.showComplete || !item.complete).length;
  }

  get items() : readonly TodoItem[]{
    // 显示
    //The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    //  it will return a new array containing all items in the list if this.showComplete is truthy, or only incomplete items if this.showComplete is falsy.
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }


}


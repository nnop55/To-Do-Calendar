import { Component, Input, OnInit } from '@angular/core';
import { StatusInfo } from '../models/select-status.model';
import { TodoFiller } from '../models/todo-modal-filler';
import { TodoModelInfo } from '../models/todo-modal-model';

@Component({
  selector: 'app-todo-week-modal',
  templateUrl: './todo-week-modal.component.html',
  styleUrls: ['./todo-week-modal.component.css']
})
export class TodoWeekModalComponent implements OnInit {
  @Input() todoFiller!: TodoFiller;

  todoItem: TodoModelInfo = new TodoModelInfo();

  statusInfo: StatusInfo[] = [
    { selectStatus: "ToDo", statusColor: "blue" },
    { selectStatus: "InProgress", statusColor: "yellow" },
    { selectStatus: "Done", statusColor: "green" }
  ]

  constructor() { }

  // konkretul dgeze da saatze tu arsebobs chanaweri filtravs da anichebs inputs da selectors mnishvnelobebs
  ngOnInit(): void {
    var filteredTodo: TodoModelInfo = this.todoFiller.todoData.filter(item => item.days == this.todoFiller.days && item.hours == this.todoFiller.hours)[0];
    if (filteredTodo != undefined) {
      this.todoItem = filteredTodo;
    }
  }

  saveChangeBtn() {

    if (this.todoItem.days != undefined) { //monacemebs anaxlebs masivshi
      this.todoFiller.todoData.forEach(item => {
        if (item.days == this.todoFiller.days && item.hours == this.todoFiller.hours) {
          this.todoItem.todo = item.todo;
          this.todoItem.selectStatusColor = item.selectStatusColor
          this.setTodoToStorage(this.todoFiller.todoData);
        }
      })
    } else { //amatebs masivshi axal monacemebs

      this.todoItem.hours = this.todoFiller.hours;
      this.todoItem.days = this.todoFiller.days;
      this.todoFiller.todoData.push(this.todoItem);
      console.log(this.todoItem)
      this.setTodoToStorage(this.todoFiller.todoData);
    }

    this.closeDialog();
  }


  deleteToDoBtn() {  //shlis archeul monacems
    var index = this.todoFiller.todoData.indexOf(this.todoItem);
    this.todoFiller.todoData.splice(index, 1);
    this.setTodoToStorage(this.todoFiller.todoData);
    this.closeDialog();
  }

  closeDialog() { //dialogis daxurva
    this.todoFiller.hideShowDialog = !this.todoFiller.hideShowDialog
  }

  setTodoToStorage(todo: any) {
    localStorage.setItem('Todo', JSON.stringify(todo))

  }

}

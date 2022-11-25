import { Component, OnInit } from '@angular/core';
import { ScheduleDays } from '../todo-days.model';
import { ScheduleHours } from '../todo-hours.model';
import { TodoFiller } from '../todo-modal-filler';
import { TodoModelInfo } from '../todo-modal-model';

@Component({
  selector: 'app-todo-week-boxes',
  templateUrl: './todo-week-boxes.component.html',
  styleUrls: ['./todo-week-boxes.component.css']
})
export class TodoWeekBoxesComponent implements OnInit {
  dialog: TodoFiller = new TodoFiller();
  dragItem!: HTMLElement;

  daysData: ScheduleDays[] = [
    { title: "Monday", className: "tealcolor", classNameTr: "trteal" },
    { title: "Tuesday", className: "redcolor", classNameTr: "trred" },
    { title: "Wednesday", className: "tealcolor", classNameTr: "trteal" },
    { title: "Thursday", className: "redcolor", classNameTr: "trred" },
    { title: "Friday", className: "tealcolor", classNameTr: "trteal" },
    { title: "Saturday", className: "redcolor", classNameTr: "trred" },
    { title: "Sunday", className: "tealcolor", classNameTr: "trteal" },
  ];

  hoursData: ScheduleHours[] = [
    { title: "WeekDays", className: "text-info" },
    { title: "6 AM", className: "tealcolor" },
    { title: "7 AM", className: "tealcolor" },
    { title: "8 AM", className: "tealcolor" },
    { title: "9 AM", className: "tealcolor" },
    { title: "10 AM", className: "tealcolor" },
    { title: "11 AM", className: "tealcolor" },
    { title: "12 AM", className: "tealcolor" },
    { title: "1 PM", className: "redcolor" },
    { title: "2 PM", className: "redcolor" },
    { title: "3 PM", className: "redcolor" },
    { title: "4 PM", className: "redcolor" },
    { title: "5 PM", className: "redcolor" },
    { title: "6 PM", className: "redcolor" },
    { title: "7 PM", className: "redcolor" },
    { title: "8 PM", className: "redcolor" },
    { title: "9 PM", className: "redcolor" },
    { title: "10 PM", className: "redcolor" },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(days: string, hours: string) {  // ixsneba dialogi da gamosaxulia romel dgezec da saatzec daaklikeb
    this.dialog.hideShowDialog = !this.dialog.hideShowDialog;
    this.dialog.days = days;
    this.dialog.hours = hours
  }

  //Drag & Drop

  onDragStart(event: DragEvent) {  //elementis ageba
    let p = event.target as HTMLElement;
    this.dragItem = p;
  }

  onDragOver(event: DragEvent) {  //elementis wagebis procesi
    event.preventDefault()
  }

  onDrop(event: DragEvent) { //dagenerireba HTML-shi
    event.preventDefault();
    let td = event.target as HTMLElement;
    if (td.getElementsByTagName("p").length == 0 && td.tagName.toLowerCase() == "td") {
      td.appendChild(this.dragItem)
    }
  }

  onDragEnd(event: DragEvent, data: TodoModelInfo) { //masivshi inpormaciis ganaxleba - <P></P>
    let p = event.target as HTMLElement;
    let td = p.parentElement as HTMLElement;

    let day = td.getAttribute("day");
    let hour = td.getAttribute("hour");

    data.hours = hour != null ? hour : data.hours;
    data.days = day != null ? day : data.days;
  }

}

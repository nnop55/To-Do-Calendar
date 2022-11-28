import { TodoModelInfo } from "./todo-modal-model";

export class TodoFiller {
    hideShowDialog: boolean = false;
    days!: string;
    hours!: string;
    todoData: TodoModelInfo[] = [];
}
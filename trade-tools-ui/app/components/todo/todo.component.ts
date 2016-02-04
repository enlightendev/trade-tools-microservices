import {Component} from "angular2/core";
import {Todo} from "./todo";
import {TodoList} from "./todo.list";
import {TodoForm} from "./todo.form";

@Component({
    selector: 'todo',
    templateUrl: 'app/components/todo/todo.component.html',
    styles:[
        'a { cursor: pointer; cursor: hand; }'
    ],
    directives: [TodoList, TodoForm]
})

export class TodoComponent {

    todos: Todo[] = [
        {text:'learn angular', done:true},
        {text:'build an angular app', done:false}
    ];

    get remaining() {
        return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
    }

    archive(): void {
        var oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach((todo: Todo) => {
            if (!todo.done) this.todos.push(todo);
        });
    }

    addTask(task: Todo) {
        this.todos.push(task);
    }
}
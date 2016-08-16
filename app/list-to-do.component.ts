import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TaskService } from './services/task.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Observable'

import { ToDoDetailComponent } from './to-do-detail.component';


@Component({
    selector: 'list-to-do',
    templateUrl: 'app/templates/list-to-do.component.html',
    providers: [TaskService, ToastsManager],
    directives: [ToDoDetailComponent, NgClass]
})

export class ListToDoComponent implements OnInit {
    tasks: any[];
    constructor(private taskService: TaskService, public toastr: ToastsManager) { }

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.taskService.getTasks()
            .subscribe(
            tasks => this.populateTask(tasks),
            error => this.toastr.error(error, 'Oops!')
            );
    }

    populateTask(tasks: Object[]) {
        this.tasks = tasks;
        for (let i = 0; i < this.tasks.length; i++) {
            this.tasks[i].blnShow = false;
        }
    }

    removeLocalTask(task: any) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].task_id === task.task_id) {
                this.tasks.splice(i, 1);
            }
        }
        this.toastr.success(`${task.task_name} was successfully deleted!`, 'Success!')
    }

    removeTask(task: any) {
        this.taskService.removeTask(task)
            .subscribe(
            task => this.removeLocalTask(task),
            error => this.toastr.error(error, 'Oops!')
            )
    }
    updateTask(objTask: any) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].task_id === objTask.task_id) {
                this.tasks[i].task_name = objTask.task_name;
                this.tasks[i].blnShow = false;
            }
        }
        this.taskService.updateTask(objTask)
            .subscribe(task => this.updateSuccess(task),
            error => this.updateFailure(error));
    }
    keyDownFunction($event) {
        if ($event.event.keyCode === 13) {
            this.updateTask($event.objTask);
        }
    }
    updateSuccess(task: any) {
        this.toastr.success(`${task.task_name} was successfully modified!`, 'Success!');
    }
    updateFailure(error: any) {
      this.toastr.error(error, 'Oops!');
    }
}

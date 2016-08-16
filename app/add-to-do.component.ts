import { Component } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TaskService } from './services/task.service';

@Component({
    selector: 'add-to-do',
    templateUrl: 'app/templates/add-to-do.component.html',
    providers: [TaskService, ToastsManager]
})

export class AddToDoComponent {
    taskName: string = '';

    constructor(private taskService: TaskService, public toastr: ToastsManager) { }

    submitTask() {
        this.taskService.addTask(this.taskName)
            .subscribe(task => this.submitSuccess(task), error => this.submitFailure(error));
        this.taskName = '';
    }
    keyDownFunction(event) {
      if(event.keyCode === 13) {
        this.submitTask();
      }
    }
    submitSuccess(task: any) {
      this.toastr.success(`${task.task_name} was successfully added!`, 'Success!');
      this.taskName = '';
    }
    submitFailure(error: any) {
      this.toastr.error(error, 'Oops!');
    }
}

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'to-do-detail',
    templateUrl: 'app/templates/to-do-detail.component.html'
})

export class ToDoDetailComponent implements OnInit {
    @Input() task: any;
    @Output() updateTask = new EventEmitter<any>();
    @Output() keyDownFunction = new EventEmitter<any>();

    objTask: any;
    ngOnInit() {
        this.objTask = Object.assign({}, this.task);
    }
    updateLocalTask(objTask: any) {
      this.updateTask.emit(objTask);
    }
    keyDownLocalFunction(event, objTask: any) {
      this.keyDownFunction.emit({event: event, objTask: objTask});
    }
}

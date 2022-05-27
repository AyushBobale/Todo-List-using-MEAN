import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksHttpService } from 'src/app/services/tasks-http.service';

@Component({
  selector: '.app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task = 'child task';
  @Input() date = 'child date';
  @Input() id = 'child id';

  constructor(private taskService   :TasksHttpService,
              private router        : Router,
              private route         : ActivatedRoute,) { }

  ngOnInit(): void {
  }

  delTask(id : String){
    this.taskService.deleteTask(id);
    this.taskService.reloadPage(this.router, this.route)
  }
}

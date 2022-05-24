import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksHttpService } from 'src/app/services/tasks-http.service';
import { Task } from 'src/app/models/TaskModel';
//API request optimizations



@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss']
})

export class MainbodyComponent implements OnInit{
  constructor(private http          : HttpClient,
              private router        : Router,
              private route         : ActivatedRoute,
              private taskService   : TasksHttpService){
    this.tasks = []
  }

  ngOnInit(): void {
    this.getTasks()
  }
  
  public tasks : Task[] ;
  public today = new Date().toLocaleDateString();
  public isFetching = false;
  taskForm = new FormGroup({
    taskname  : new FormControl('', [Validators.required,
                                    Validators.minLength(3)]),
    date      : new FormControl('2022-05-05', [Validators.required])
    }
  );

  addTask(){
    this.taskService.createTask(this.taskForm.value.taskname, this.taskForm.value.date);
    this.taskService.reloadPage(this.router, this.route)
  }

  getTasks(){
    this.tasks = []
    this.taskService.getTasks().subscribe((res) => {
      this.tasks.push(...res)
    })
  }

  delTask(id : String){
    this.taskService.deleteTask(id);
    this.taskService.reloadPage(this.router, this.route)
  }


}

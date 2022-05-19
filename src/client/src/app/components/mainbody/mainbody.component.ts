import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss']
})

export class MainbodyComponent{
  public tasks: Array<any> = [
    {task: 'Task 1',  date: '2022-05-03'},
  ]

  taskForm = new FormGroup({
    taskname  : new FormControl('', [Validators.required,
                                    Validators.minLength(3)]),
    date      : new FormControl('2022-05-03', [Validators.required])
    }
  );

  addTask(){
    this.tasks.push({task: this.taskForm.value.taskname, date: this.taskForm.value.date})
  }
  //================================================================
  
}

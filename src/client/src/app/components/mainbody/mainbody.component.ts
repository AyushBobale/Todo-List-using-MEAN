import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss']
})
export class MainbodyComponent{
  public tasks: Array<any> = [
    {task: 'Task 1',  date:'25th May'},
    {task: 'Task 2',  date:'26th May'},
    {task: 'Task 3',  date:'27th May'},
    {task: 'Task 4',  date:'28th May'},
    {task: 'Task 4',  date:'29th May'},
  ]
}

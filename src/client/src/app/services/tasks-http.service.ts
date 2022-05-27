import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class TasksHttpService {

  constructor(private http: HttpClient) {
  }
  private url = 'http://localhost:3000/tasks/';
  private tasks : any;

  getTasks(){
    return this.http.get<Task[]>(this.url);
  }

  createTask(task: String, date: String) {
    return this.http.post<Task>(this.url, {task : task, date : date});
  }

  deleteTask(id : String){
    return this.http.delete<Task>(`${this.url}${id}`)
      .subscribe((res)=> {
        //console.log(res);
      })
  }

  reloadPage(router : Router, route : ActivatedRoute){
    router.routeReuseStrategy.shouldReuseRoute = () => false;
    router.onSameUrlNavigation = 'reload';
    router.navigate(['./'], {relativeTo: route})
  }
}

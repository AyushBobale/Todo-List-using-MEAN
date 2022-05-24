import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksHttpService {

  constructor(private http: HttpClient) {
  }
  private url = 'http://localhost:3000/tasks/';
  private tasks : any;

  getTasks(){
    return this.http.get<any[]>(this.url)
  }

  createTask(task: String, date: String) {
    this.http.post(this.url, 
      {task : task, date : date})
      .subscribe((res)=>{
        //console.log(res);
      });
  }

  deleteTask(id : String){
    this.http.delete(`${this.url}${id}`)
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

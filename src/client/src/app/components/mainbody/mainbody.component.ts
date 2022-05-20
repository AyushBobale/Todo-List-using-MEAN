import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss']
})

export class MainbodyComponent implements OnInit{
  
  constructor(private http    : HttpClient,
              private router  : Router,
              private route   : ActivatedRoute){
    this.tasks = []
  }
  
  public tasks: any ;
  
  taskForm = new FormGroup({
    taskname  : new FormControl('', [Validators.required,
                                    Validators.minLength(3)]),
    date      : new FormControl('05-05-2022', [Validators.required])
    }
  );

  addTask(){
    this.http.post('http://localhost:3000/tasks/', {task: this.taskForm.value.taskname})
    .subscribe((res)=>{
      console.log(res)
    });
    this.taskForm.reset();
    this.getTasks();
    this.reloadPage();
  }

  ngOnInit(): void {
    this.getTasks()
  }

  private getTasks(){
    this.http.get('http://localhost:3000/tasks/')
    .subscribe((res)=>{
      this.tasks = res;
      //console.log(this.tasks);
    })
  }

  private reloadPage(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {relativeTo:this.route})
  }
}

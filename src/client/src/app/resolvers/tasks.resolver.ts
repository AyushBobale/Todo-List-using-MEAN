import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { of } from "rxjs";
import { TasksHttpService } from "../services/tasks-http.service";
/**
 * --------------------------------------------------------------------------------
Not in Use
* --------------------------------------------------------------------------------
**/


@Injectable()
export class TasksResolver implements Resolve<any[]>{
    
    constructor(private taskService: TasksHttpService){}

    resolve(){
        console.log('Resolver');
        return this.taskService.getTasks();
    }
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksResolver } from './resolvers/tasks.resolver';

const routes: Routes = [
  {
    component:MainbodyComponent,
    path:'',
  },
  {
    component:ProjectsComponent,
    path:'projects'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TasksResolver]
})
export class AppRoutingModule { }

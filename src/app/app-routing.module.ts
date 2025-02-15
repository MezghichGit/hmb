import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"employers",
    component:ListEmployerComponent
  },
  {
    path:"posts",
    component:ListPostsComponent
  },
  {
    path:"home",
    component:HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

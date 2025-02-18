import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { HomeComponent } from './home/home.component';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { DetailsProviderComponent } from './details-provider/details-provider.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { AddArticleComponent } from './add-article/add-article.component';

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
  ,
  {
    path:"listProviders",
    component:ListProvidersComponent
  },
  {
    path:"addProvider",
    component:AddProviderComponent
  },
  {
    path:"updateProvider/:id",
    component:UpdateProviderComponent
  },
  {
    path:"detailsProvider/:id",
    component:DetailsProviderComponent
  },
  {
    path:"listArticles",
    component:ListArticlesComponent
  },
  {
    path:"addArticle",
    component:AddArticleComponent
  },
  { path: '',   redirectTo: '/listProviders', pathMatch: 'full' }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

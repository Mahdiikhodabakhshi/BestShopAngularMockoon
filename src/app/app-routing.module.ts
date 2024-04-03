import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {OneArticleComponent} from "./components/one-article/one-article.component";
import {WhoWeAreComponent} from "./components/who-we-are/who-we-are.component";
import {ArticlesComponent} from "./components/articles/articles.component";

function ArticulosComponent() {

}

const routes: Routes = [
  {
    path :"",
    pathMatch : "full",
    redirectTo : "home"
  },
  {
    path:"home" , component:HomeComponent
  },
  {
    path:"articles" , component : ArticlesComponent
  },
  {
    path:"oneart/:id" , component:OneArticleComponent
  },
  {
    path:"nosotros" , component:WhoWeAreComponent
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

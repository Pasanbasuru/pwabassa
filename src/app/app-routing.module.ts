import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesTechnologyComponent } from './articles-technology/articles-technology.component';
import { ArticlesJavascriptComponent } from './articles-javascript/articles-javascript.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'articles', component: ArticlesTechnologyComponent },
  { path: 'articles-javascript', component: ArticlesJavascriptComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

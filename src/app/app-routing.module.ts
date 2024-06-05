import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: ':id',
    loadChildren: () => import('@pages/article/article.module').then(m => m.ArticleModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

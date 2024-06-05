import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';

const routes: Routes = [{ path: '', component: ArticleComponent }];

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ArticleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles.component';

const routes: Routes = [{ path: '', component: ArticlesComponent }];

@NgModule({
  declarations: [ArticlesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ArticlesModule {}

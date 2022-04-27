import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedNewsComponent } from './components/archived-news/archived-news.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'create-news', component: CreateNewsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'archived-news', component: ArchivedNewsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

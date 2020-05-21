import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  { path: "movie", component: MovieListComponent },
  { path: "", redirectTo: "/movie", pathMatch: "full" },
  { path: "**", redirectTo: "/movie", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';


const routes: Routes = [
  { path: "movie", component: MovieListComponent },
  { path: "watchlist", component: WatchlistPageComponent },
  { path: "", redirectTo: "/movie", pathMatch: "full" },
  { path: "**", redirectTo: "/movie", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any = [];
  viewWatchlist: any = [];

  constructor(private service: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.viewWatchlist = this.service.getWatchList();

    this.route.queryParams.subscribe((response) => {

      if (response.year || response.genres || response.topgross) {
        this.service.getMovieSearch(response).subscribe((response) => {
          this.movies = response.results;
          if (this.viewWatchlist) {
            this.addTrue();
          }
        });
      } else {
        this.service.getTopRated().subscribe(response => {
          this.movies = response.results;
          if (this.viewWatchlist) {
            this.addTrue();
          }
        });
      }
    });
  }

  onSubmit(form: NgForm): void {
    let parameters: any = {};
    if (form.value.year) {
      parameters.year = form.value.year;
    }
    if (form.value.genre) {
      parameters.genres = form.value.genre;
    }
    if (form.value.topgross) {
      parameters.topgross = form.value.topgross;
    }
    this.router.navigate(["movie"], {
      queryParams: parameters
    })

  }

  checkWatchlist(movie: any): boolean {
    return this.viewWatchlist.some((listItem) => {
      return listItem.id === movie.id;
    })
  }

  addTrue(): void {
    this.movies.forEach((movie) => {
      if (this.checkWatchlist(movie)) {
        movie.isClicked = true;
      }
    });
  }


  addWatchlist(movie: any): void {
    let index = null;
    if (this.viewWatchlist.length === 0) {
      movie.isClicked = true;
      this.viewWatchlist.push(movie);
    } else {
      index = this.viewWatchlist.findIndex((listItem) => {
        return listItem.id === movie.id;
      });
      if (this.checkWatchlist(movie)) {
        this.service.removeWatchlist(index)
        movie.isClicked = false;
      } else {
        movie.isClicked = true;
        this.viewWatchlist.push(movie);
      }
    }
  }

  seeDetails(movie: any) {
    movie.detailsClicked = true;
    movie.posterClicked = true;
  }

  hideDetails(movie: any) {
    movie.detailsClicked = false;
    movie.posterClicked = false;
  }
}




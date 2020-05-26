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

  movies: any;


  constructor(private service: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      // do logic if form is submitted
      console.log(response);
      if (response.year || response.genre || response.topgross) {
        this.service.getMovieSearch(response).subscribe((response) => {
          console.log(response);
          this.movies = response;
        });
      } else {
        this.service.getTopRated().subscribe(response => {
          this.movies = response;
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


  addWatchlist(movie: any): void {
    //this adds a property to the movie object
    //so we can grab this property to trigger styles
    movie.isClicked = true;
    movie.wishList = false;
    if (movie.wishList === false) {
      this.service.pushWatchlist(movie)
      //need to figure out how to prevent mulitples from going into the list
    }
    movie.wishList = true;
    console.log(movie)
  }

  seeDetails(movie: any) {
    movie.detailsClicked = true;
    movie.posterClicked = true;
  }

  // checkWatchlist(movie: any, index: number): void {
  //   //this adds a property to the movie object
  //   //so we can grab this property to trigger styles
  //   movie.isClicked = true;
  //   console.log(movie.title)
  //   console.log(this.watchListSearchPage.title)
  //   if (this.watchListSearchPage.title != movie.title) {
  //     this.service.pushWatchlist(movie)
  //     //need to figure out how to prevent mulitples from going into the list
  //   } else {
  //     this.service.removeWatchlist(index)
  //   }
  //   this.watchListSearchPage = this.service.getWatchList();
  //   console.log(movie)
  // }


}




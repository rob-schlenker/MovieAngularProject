import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any;


  @Output() sendWatchlist = new EventEmitter<any>();

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getTopRated().subscribe(response => {
      this.movies = response;
    });
  }

  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(form.value)

    this.service.getMovieSearch(form.value.year, form.value.genre, form.value.topgross).subscribe((response) => {
      console.log(response);
      this.movies = response;
    });
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


}




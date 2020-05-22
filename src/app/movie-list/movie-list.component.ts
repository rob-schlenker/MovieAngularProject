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
    let gross = "revenue.desc";
    if (form.value.topgross > 0) {
      this.service.getMovieSearch(form.value.year, form.value.genre, form.value.topgross, gross).subscribe((response) => {
        console.log(response);
        this.movies = response;
      });
    } else {
      this.service.getMovieSearch(form.value.year, form.value.genre, form.value.topgross).subscribe((response) => {
        console.log(response);
        this.movies = response;
      });
    }
  }

  addWatchlist(movie: any): void {
    this.service.pushWatchlist(movie)
    // this.sendWatchlist.emit(this.watchList)
    console.log(movie)
  }
}




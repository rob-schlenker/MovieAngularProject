import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getTopRated().subscribe(response => {
      this.movies = response;
      console.log(response)
    });
  }

}

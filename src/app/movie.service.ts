import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  watchList: any[] = [];

  // API Key
  apiKey: string = "4f8cf7b6aa6ecc6f5fdb68ec292d741d";
  // API Links
  topRatedUrl: string = "https://api.themoviedb.org/3/movie/top_rated";
  movieSearchUrl: string = "https://api.themoviedb.org/3/discover/movie";

  constructor(private http: HttpClient) { }
  getTopRated(): any {
    return this.http.get(this.topRatedUrl, {
      params: { api_key: this.apiKey, region: "US" }
    });
  }



  getMovieSearch(movieYear, movieGenre, highestGross = "popularity.desc"): any {
    let parameters: any = {};
    parameters.api_key = this.apiKey;
    parameters.region = "US";
    if (movieYear != "") {
      parameters.primary_release_year = movieYear;
    }
    if (movieGenre != "") {
      parameters.with_genres = movieGenre;
    }
    if (highestGross != "") {
      parameters.sort_by = highestGross;
    }
    return this.http.get(this.movieSearchUrl, {
      params: parameters
    });

  }

  pushWatchlist(movie: any): void {
    this.watchList.push(movie);
  }

  removeWatchlist(index: number): void {
    this.watchList.splice(index, 1);
  }

  getWatchList(): any {
    return this.watchList;
  }

}

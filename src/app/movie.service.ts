import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // API Key
  apiKey: string = "4f8cf7b6aa6ecc6f5fdb68ec292d741d";
  // API Links
  topRatedUrl: string = "https://api.themoviedb.org/3/movie/top_rated";
  mostPopularUrl: string = "https://api.themoviedb.org/3/movie/popular";
  movieSearchUrl: string = "https://api.themoviedb.org/3/discover/movie";

  constructor(private http: HttpClient) { }
  getTopRated(): any {
    return this.http.get(this.topRatedUrl, {
      params: { api_key: this.apiKey, region: "US" }
    });
  }

  getMostPopular(): any {
    return this.http.get(this.mostPopularUrl, {
      params: { api_key: this.apiKey, region: "US" }
    });
  }

  getMovieSearch(movieYear = "", movieGenre = ""): any {
    return this.http.get(this.movieSearchUrl, {
      params: { api_key: this.apiKey, region: "US", primary_release_year: movieYear, with_genres: movieGenre }
    });

  }

}

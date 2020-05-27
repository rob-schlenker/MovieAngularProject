import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  watchList: any = [];

  // API Key
  apiKey: string = "4f8cf7b6aa6ecc6f5fdb68ec292d741d";
  // API Links
  topRatedUrl: string = "https://api.themoviedb.org/3/movie/top_rated";
  discoverSearchUrl: string = "https://api.themoviedb.org/3/discover/movie";

  constructor(private http: HttpClient) { }

  getTopRated(): any {
    return this.http.get(this.topRatedUrl, {
      params: { api_key: this.apiKey, region: "US" }
    });
  }

  getMovieSearch(parameters: any): any {
    console.log(parameters);
    let discoverParameters: any = {};
    discoverParameters.api_key = this.apiKey;
    discoverParameters.region = "US";
    if (parameters.year) {
      discoverParameters.primary_release_year = parameters.year;
    }
    if (parameters.genres) {
      discoverParameters.with_genres = parameters.genres;
    }
    if (parameters.topgross) {
      discoverParameters.sort_by = parameters.topgross;
    }
    console.log(discoverParameters);
    return this.http.get(this.discoverSearchUrl, {
      params: discoverParameters
    });


  }

  pushWatchlist(movie: any): void {
    this.watchList.push(movie);
    console.log(this.watchList)
  }

  removeWatchlist(index: number): void {
    this.watchList.splice(index, 1);
  }

  getWatchList(): any {
    return this.watchList;
  }

}

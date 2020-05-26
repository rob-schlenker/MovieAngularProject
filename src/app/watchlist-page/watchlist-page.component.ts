import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {

  watchList: any;

  @Input() watchListInfo: any;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.watchList = this.service.getWatchList();
  }

  //


}

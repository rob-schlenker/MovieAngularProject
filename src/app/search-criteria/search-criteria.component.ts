import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  searchData: any;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
  }

  getSearchData(form: NgForm) {
    this.service.getMovieSearch(form.value.year).subscribe((response) => {
      console.log(form);
      console.log(response);
      this.searchData = response;

    })

  }


}

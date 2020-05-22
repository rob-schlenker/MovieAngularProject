import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  // searchData: any;
  @Output() submitted = new EventEmitter<NgForm>();

  constructor(private service: MovieService) { }

  ngOnInit(): void {
  }

  getSearchData(form: NgForm) {
    let gross = "revenue.desc";
    let emptyGross = "";
    // needs to be specific with form values
    console.log(form.value)
    if (form.value.topgross >= 1) {
      this.service.getMovieSearch(form.value.year, form.value.genre, form.value.topgross, gross).subscribe((response) => {
        this.submitted.emit(form);
        console.log("if", response);
      });
    } else {
      this.service.getMovieSearch(form.value.year, form.value.genre, form.value.topgross, emptyGross).subscribe((response) => {
        this.submitted.emit(form);
        console.log("else", response);
      });
    }

  }

}

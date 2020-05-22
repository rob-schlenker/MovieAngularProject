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
    this.submitted.emit(form);
  }

}

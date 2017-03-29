import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../models/beer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input() beer: Beer;

  constructor() { }

  ngOnInit() {

  }
}


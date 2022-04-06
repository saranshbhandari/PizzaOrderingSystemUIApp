import { Component, Input, OnInit } from '@angular/core';
import { BasicCategory } from 'src/models/BasicCategory.model';

@Component({
  selector: 'app-menu',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit {

  constructor() { }

  @Input()
  categorylist!:Array<BasicCategory>;
  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BasicCategory } from 'src/models/BasicCategory.model';


@Component({
  selector: 'app-categoryitem',
  templateUrl: './categoryitem.component.html',
  styleUrls: ['./categoryitem.component.sass']
})
export class CategoryitemComponent implements OnInit {

  constructor() { }


  @Input()
  category!:BasicCategory;

  @Output()
  click=new EventEmitter();

  ngOnInit(): void {
  }

  CategoryItemClicked($event:Event):void{
    this.click.emit('');
  }

}

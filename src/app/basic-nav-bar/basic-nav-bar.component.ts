import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-nav-bar',
  templateUrl: './basic-nav-bar.component.html',
  styleUrls: ['./basic-nav-bar.component.sass']
})
export class BasicNavBarComponent implements OnInit {

  constructor() { }

  @Input()
  BrandName!:string;

  @Input()
  CartItems!:string;

  ngOnInit(): void {
  }

}

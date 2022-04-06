import { Component } from '@angular/core';
import { BasicCategory } from 'src/models/BasicCategory.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'PizzaOrderingSystemUIApp';

  BasicCategoryList=new Array<BasicCategory>();

  constructor(){

    this.BasicCategoryList.push(new BasicCategory('Pizza'
    ,'A flatbread with lots and lots of toppings on it served with varity of cheese'
    ,'https://localhost:44315/images/pizza.jpg'));


    this.BasicCategoryList.push(new BasicCategory('Pasta'
    ,'A flatbread with lots and lots of toppings on it served with varity of cheese'
    ,'https://localhost:44315/images/pasta.jpg'));
  }

}

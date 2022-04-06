import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryitemComponent } from './categoryitem/categoryitem.component';
import { BasicNavBarComponent } from './basic-nav-bar/basic-nav-bar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryitemComponent,
    BasicNavBarComponent,
    CategoryListComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

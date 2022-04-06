import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [{path: '.', component:CategoryListComponent  },
{path:'Category/{category}',component:ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

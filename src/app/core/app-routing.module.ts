import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {RecipesComponent} from '../recipes/recipes.component';
import {ShopingListComponent} from '../shoping-list/shoping-list.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent},
  {path: 'shoping-list', component: ShopingListComponent}
];

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

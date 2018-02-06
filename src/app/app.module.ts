import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { EditComponent } from './shoping-list/edit/edit.component';
import {BasicHighLightDirective} from './directives/hilight/hilight.directive';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    EditComponent,
    BasicHighLightDirective,
    RecipeCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

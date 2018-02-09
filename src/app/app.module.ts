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
import { NewHighLightDirective } from './directives/better-high-light/new-high-light.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import {ShopingListService} from './services/shoping-list.service';
import {TestOneService} from './services/test-one.service';


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
    RecipeCreateComponent,
    NewHighLightDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShopingListService, TestOneService],
  bootstrap: [AppComponent]
})
export class AppModule { }

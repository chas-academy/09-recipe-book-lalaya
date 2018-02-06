import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

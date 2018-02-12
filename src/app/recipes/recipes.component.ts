import { Component, OnInit } from '@angular/core';
// import { DataService } from '../services/data.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

    selectedRecipe: Recipe;
    recipes: Recipe[];


  /* constructor(private dataService: DataService) {
    console.log('testing');
  } */

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();

    /*this.dataService.getPost().subscribe((post) => {
        console.log(post);
      this.post = post;
    }); */
  }
    onSelect(recipe: Recipe): void {
      this.selectedRecipe = recipe;
    }

    getRecipes(): void {
      this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
    }

  }





/* interface Post {
    id: number;
    title: string;
} */

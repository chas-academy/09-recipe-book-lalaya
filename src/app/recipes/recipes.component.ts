import { Component, OnInit } from '@angular/core';
// import { DataService } from '../services/data.service';
import { Recipe} from '../recipe';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

    recipes = RECIPES;
    selectedRecipe: Recipe;

  /* constructor(private dataService: DataService) {
    console.log('testing');
  } */

  constrctor() { }

  ngOnInit() {

    /*this.dataService.getPost().subscribe((post) => {
        console.log(post);
      this.post = post;
    }); */

  }

  onSelect(recipe: Recipe ): void {
    this.selectedRecipe = recipe;
  }

}

/* interface Post {
    id: number;
    title: string;
} */

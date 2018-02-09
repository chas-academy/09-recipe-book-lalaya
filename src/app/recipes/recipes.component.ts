import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
    recipe = 'Chocolate Cookie';
    post: Post[];

    recipes = RECIPES;

  constructor(private dataService: DataService) {
    console.log('testing');
  }

  ngOnInit() {

    this.dataService.getPost().subscribe((post) => {
        console.log(post);
      this.post = post;
    });

  }

}

interface Post {
    id: number;
    title: string;
}

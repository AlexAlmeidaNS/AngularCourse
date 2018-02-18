import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [

  	new Recipe('Ratatouille', 'This one comes from a movie', 'https://i.pinimg.com/736x/43/43/f9/4343f99002d350663f6b1c56d825c6f4--misto-ratatouille.jpg')
  	new Recipe('Green Juice', 'This is a healthy choice!', 'https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/healthy-green-juice_26121.jpg')


  ];

  constructor() { }

  ngOnInit() {
  }

}

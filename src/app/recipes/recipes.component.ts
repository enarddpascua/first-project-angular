import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  constructor(private route: ActivatedRoute, private router: Router){}

  onReload(){
    this.router.navigate(['recipes'], {relativeTo:this.route});
  }
}

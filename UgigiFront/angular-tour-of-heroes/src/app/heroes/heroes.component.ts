import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heros';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;


  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  hero: Hero ={
    id:1,
    name:"Windstorm"
  }

 
  
  constructor() { }

  ngOnInit(): void {
  }

}

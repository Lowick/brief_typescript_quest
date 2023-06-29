import { Hero } from "./hero";
import { Weapon } from "./weapons";
import {HeroSword} from "./heroSword"

   export class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number, weapon?:string ){
    super(name, power, life);
    this.weapon=(new Weapon("Axe"));
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroSword) {
       opponent.setLife( opponent.getLife() -(this.getPower() * 2))}
        else
      {super.attack(opponent)
    } 
  }
}
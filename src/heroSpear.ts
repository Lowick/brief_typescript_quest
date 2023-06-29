 import { Hero } from "./hero";
 import { Weapon } from "./weapons";
 import { HeroAxe } from "./heroAxe";
 
 export class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number, weapon?:string) {
    super(name, power, life);
    this.weapon=(new Weapon("Spear"));
  }

  attack(opponent: Hero){
    if( opponent instanceof HeroAxe){
       opponent.setLife( opponent.getLife() -(this.getPower() * 2))
    } else{super.attack(opponent)
    
    } 
        }        
}  
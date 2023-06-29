import { Weapon } from "./weapons";
import { HeroSpear } from "./heroSpear";

export class Hero{
   private name:string;
   private power:number;
   private life:number;
   public weapon?:Weapon;


    constructor(name:string,power:number,life:number){
        this.name = name
        this.power = power
        this.life = life
    }


    attack(opponent:Hero):void{
        opponent.life -= this.power  
    }

    isAlive():boolean{
        if(this.life > 0){
            return true}
                else{
            } return false
        }

        
  getName() {
    return this.name;
  }

  getPower() {
    return this.power;
  }

  getLife() {
    return this.life;
  }

  setPower(power: number) {
    this.power = power;
  }

  setLife(life: number) {
    this.life = life;
  }
    
    }

    let ken = new Hero("ken",100,80);
    let ryu = new Hero("ryu",150,70);
    
    ken.attack(ryu)
    console.log("ryu est il vivant: " + ryu.isAlive());
    console.log(ken.getLife)
    console.log(ryu.getLife)
    
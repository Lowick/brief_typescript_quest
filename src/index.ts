
// premiere partie

export class Hero{
   private name:string;
   private power:number;
   private life:number;
   weapon!:Weapon;


    constructor(name:string,power:number,life:number){
        this.name = name
        this.power = power
        this.life = life
    }


    attack(opponent:Hero):void{
        opponent.life -= this.power  
    }

    isAlive():boolean{
        return this.life > 0;
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

  setLife(newlife: number) {
    this.life = newlife;
  }
    
    }

    
    


let ken = new Hero("ken",80,150);
    let ryu = new Hero("ryu",40,170);
    
    ken.attack(ryu)
    console.log("ryu est il vivant: " + ryu.isAlive());
    console.log("la vie de ken est de:" + ken.getLife())
    console.log("la vie de ryu est de : " + ryu.getLife())
    
   
    
// deuxieme partie

export class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number, weapon?:string ){
    super(name, power, life);
    this.weapon=(new Weapon("Axe",20));
  }

  attack(opponent: Hero):void {
    if (opponent instanceof HeroSword) {
       opponent.setLife( opponent.getLife() -(this.getPower() * 2 + this.weapon.damage));
      }
        else
      {opponent.setLife(opponent.getLife()-(this.getPower()+this.weapon.damage));
    } 
  }
}

export class HeroSword extends Hero {
  constructor(name: string, power: number, life: number, weapon?:string) {
    super(name, power, life);
    this.weapon=(new Weapon("Sword",60));

  }
  attack(opponent: Hero){
    if( opponent instanceof HeroSpear){
      opponent.setLife( opponent.getLife() -(this.getPower() * 2 + this.weapon.damage))
    } else{opponent.setLife(opponent.getLife()-(this.getPower()+this.weapon.damage));;
       
    } 
        }        
}

export class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number, weapon?:string) {
    super(name, power, life);
    this.weapon=(new Weapon("Spear",80));
  }

  attack(opponent: Hero){
    if( opponent instanceof HeroAxe){
       opponent.setLife( opponent.getLife() -(this.getPower() * 2 + this.weapon.damage))
    } else{opponent.setLife(opponent.getLife()-(this.getPower()+this.weapon.damage));;
    
    } 
        }        
}  

export class Weapon{
        name:string;
        damage:number;

        constructor(name:string, damage:number){
        this.name=name
        this.damage=damage
    }


    }

let jin = new HeroSpear("jin",25,300,"Spear")
let steeve = new HeroAxe("steeve",40,268,"Axe")
let balrog = new HeroSword("balrog",30,320,"Sword")

console.log(jin.getLife())

// steeve.attack(balrog)
// console.log("steeve est il vivant: " + balrog.isAlive());
// console.log(balrog.getLife())

 
while(balrog.isAlive() && steeve.isAlive()){
   balrog.attack(steeve);
   steeve.attack(balrog);
   console.log("hero1"+ balrog.getLife());
   console.log("hero2"+ steeve.getLife());
    if(steeve.getLife() <=0 && balrog.getLife() <=0){
        console.log("draw");}
        else if(balrog.getLife() <= 0){
console.log(steeve.getName() + "win");
        }else if( steeve.getLife() <= 0){
            console.log(balrog.getName() + "win")
        }
        
}
    
    
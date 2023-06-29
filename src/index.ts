import { Hero } from "./hero";
import { Weapon } from "./weapons";
import {HeroSword} from "./heroSword";
import { HeroSpear } from "./heroSpear";
import { HeroAxe } from "./heroAxe";


let ken = new Hero("ken",100,80);
    let ryu = new Hero("ryu",150,70);
    
    ken.attack(ryu)
    console.log("ryu est il vivant: " + ryu.isAlive());
    console.log(ken.getLife())
    console.log(ryu.getLife())
    
   
    

let jin = new HeroSpear("jin",150,300,"Spear")
let steeve = new HeroAxe("steeve",150,268,"Axe")
let balrog = new HeroSword("balrog",180,320,"Sword")

steeve.attack(balrog)
console.log("steeve est il vivant: " + balrog.isAlive());
console.log(balrog.getLife())

 
while(balrog.isAlive() && steeve.isAlive()){
   balrog.attack(steeve);
   steeve.attack(balrog);
    if(steeve.getLife() <=0 && balrog.getLife() <=0){
        console.log("draw");}
        else if(balrog.getLife() <= 0){
console.log(steeve.getName() + "win");
        }else if( steeve.getLife() <= 0){
            console.log(balrog.getName() + " win")
        }
    }


      
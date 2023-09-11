# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ?

```
Il existe 6 types primitives de données en TypeScript:
- Le type numérique: number
Utilisé pour représenter à la fois des entiers et des réels.

- Le type chaine de caractère : string
Utilisé pour représenter le texte

- Le type Booléen : boolean
Ne peut avoir que deux valeurs «true» et «false»

- Le type néant: Void
C’est un type de retour des fonctions qui ne renvoient aucun type de valeur. Il est utilisé là où aucun type de données n’est disponible.

- Le type nulle : null
Représente une variable dont la valeur n’est pas définie. La valeur Null accepte une seule valeur «null».

- Le type indéfini : undefined
Désigne toutes les variables non initialisées. Il n’a qu’une seule valeur «undefined».

```

- Comment typer un tableau ?

```
Pour typer un tableau, il faut déclarer un variable : type[] = .

// Déclarer un tableau de nombres
let tableauDeNombres: number[] = [1, 2, 3, 4, 5];

deuxieme facon: let tab2:Array<boolean>;
tab2 = [true,false];
```

- Quel est le type `any` ?

```
"any" est de type spécial, nous pouvons l'utiliser dès que nous souhaitons qu’une valeur particulière ne cause pas d’erreurs à la vérification de types.
Quand une valeur est de type any, nous pouvons accéder à toutes ses propriétés (qui seront, à leur tour, de type any)
```

- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ?

```
Le typage du retour d'une fonction et du/des paramètres se fait dans la déclaration.

function jeTypeMaFonction(name: string): string {
   return "Je suis une " + name";
}
function('string');

function addition(a:number, b:number):number{
    return a + b;
}
console.log("le resultat :",addition(5,7));
console.log(a+b);
```

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

- Qu'est ce qu'une classe ?

```
une classe est une structure de programmation orientée objet qui permet de définir un modèle ou un plan pour créer des objets.
```

- Qu'est ce qu'un constructeur de classe ?

```
Un constructeur de classe est une méthode spéciale définie dans une classe. Le rôle principal d'un constructeur est d'initialiser les propriétés d'un objet lorsque vous créez une nouvelle instance de cette classe.
```

- Qu'est ce qu'une instance de classe ?

On appelle instace de classe, un objet avec un comportement et un état, tous définis par la classe.

- Comment vérifier qu'une classe est d'une certaine instance ?

On peut vérifier cela en utilisant l'opérateur "instanceof".

- Qu'est ce que `this` dans une classe ?

"This" fait référence à l'objet actuel sur lequel une méthode est appelé.

- Qu'est ce qu'une méthode de classe ?

Une méthode de classe est une fonction définie à l'intérieur d'une classe.Une méthode est définie dans le corps de la classe et peut être appelée sur des instances de cette classe.
nomDeMonInstance.nomDeMaMethode()

- Qu'est ce que la visibilité des propriétés ?

Il existe 3 genres de visibilité des propriétés:

public, private, protected

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre)

-En créant plusieurs modules
-Utilisez l'importation et l'exportation

- Qu'est ce que l'héritage ?

L'heritage permet à un programme de creer une nouvelle classe à partir d'une classe existante, elle en prend les propriétés et les comportement.

class Person{
name: string;

    constructor(name: string) {
        this.name = name;
    }

}

```
class Employee extends Person {
    empCode: number;

    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
    }
}
```

- Comment appeler le constructeur d'une classe mère ?

Pour appeler le constructeur d'une classe mère, il faut appeler super() dans le nouveau constructeur avant l'usage de this.

- Comment appeler une méthode d'une classe mère ?

Pour appeler la méthode de la class mère, il suffit de taper
leNomDeLaClasseFille.leNomDeLaMethodeMere

- Qu'est ce que le polymorphism ?

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !

### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
_Exemple : Si Joan attaque Leon, cela sera représenté par :_

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes

​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​

### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

**_Bonus 1 : Les dégâts de l'arme_**

_Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur._

_Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`_

**_Bonus 2 : Interface graphique_**

_Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)_

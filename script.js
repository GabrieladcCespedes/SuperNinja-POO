/** Gabriela Céspedes */

class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }

    showStatus() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Fuerza: ${this.fuerza}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}
/**
 * Clase Sensei
 * Extiende la clase Ninja y crea la clase Sensei. 
 * Un Sensei debe tener 200 de salud, 10 de velocidad y 10 de fuerza por defecto. 
 * Además, un Sensei debe tener un nuevo atributo llamado sabiduría , y el valor predeterminado debe ser 10. 
 * Finalmente, agrega el métodospeakWisdom(). 
 * speakWisdom()debe llamar al métododrinkSake() desde la clase Ninja, antes de hacer console.logging un mensaje de sabiduría.
 */
class Sensei extends Ninja {
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores puededs hacerlo en dos meses.");
    }
}

const superSansei = new Sensei("Master Splinter");
superSansei.speakWisdom();
console.log(superSansei);
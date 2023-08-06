/*
    8-Verify an Object's Constructor with instanceof
    
    Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
*/


// Solution:

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);

console.log(myHouse instanceof House);





/*
    Explained:
    En este código, new House(3) crea un nuevo objeto House llamado myHouse con la propiedad numBedrooms configurada a 3. myHouse instanceof House comprueba si myHouse es una instancia del constructor House y devuelve true si es así.
    
 */
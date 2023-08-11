/*
    Ejercico 12: Understand the Constructor Property

    Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
*/

// Solution:
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    return candidate.constructor === Dog;
}




//Explained:
/*
Por favor ten en cuenta que, aunque esto funcionará en la mayoría de los casos, la propiedad constructor puede ser sobreescrita y no es tan segura como usar instanceof.
function joinDogFraternity(candidate) {
  return candidate instanceof Dog;
}


*/
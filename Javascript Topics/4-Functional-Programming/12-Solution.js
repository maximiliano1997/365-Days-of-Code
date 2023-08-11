// Remove elements from an array using slice instead of splice

// Rewrite the non MutatingSplice function using slice instad of splice. It should limit the provided cities array to a length of 3 and return a new array with only the first three elements. 
// Do not modify the original array provided to the function.



// Solution:

function nonMutationSplice(cities) {
    return cities.slice(3, 0);
}

// Explained:
/*
La función slice() devuelve una copia superficial de una porción de un array en un nuevo objeto de array sin modificar el array original. Por eso, en este caso, la función slice(0, 3) devuelve los primeros tres elementos del array cities.
*/
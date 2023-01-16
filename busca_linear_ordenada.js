'use strict';

let array = [1, 10, 100, 4000, 70000, 25000000];
let key = 50;

/**
 * Busca que retorna o índice em que se encontra um elemento buscado em um array de elementos ordenados
 * @author Júlio Campos
 * @param {Array} array array de elementos ordenados
 * @param {Number} key elemento de busca
 * @returns índice do elemento buscado ou -1 se não for encontrado
 */
function orderedLinearSearch(array, key) {
    for (let index = 0; index < array.length; index++) {

        console.log(`array[${index}]:`, array[index]);

        if (array[index] > key) {
            return -1;
        }

        if (array[index] === key) {
            return index;
        }
    }
}

console.log(orderedLinearSearch(array, key));

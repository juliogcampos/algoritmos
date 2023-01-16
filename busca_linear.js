'use strict';

let array = [1, 47, 14, -2, 100];
let key = 100;

/**
 * Busca que retorna o índice em que se encontra um elemento buscado em um array
 * @author Júlio Campos
 * @param {Array} array array de elementos
 * @param {Number} key elemento de busca
 * @returns índice do elemento ou -1 se não for encontrado
 */
function linearSearch(array, key) {
    for (let index = 0; index < array.length; index++) {

        console.log(`array[${index}]:`, array[index]);

        if (array[index] === key) {
            return index;
        }
    }
    return -1;
}

console.log(linearSearch(array, key));

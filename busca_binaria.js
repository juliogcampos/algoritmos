'use strict';

let array = [1, 10, 100, 400, 543, 765, 897];
let key = 10;

/**
 * Busca que retorna o índice em que se encontra um elemento buscado em um array ordenado
 * @author Júlio Campos
 * @param {Array} array array de elementos ordenados
 * @param {Number} key elemento de busca
 * @returns índice do elemento buscado ou -1 se não for encontrado
 */
function binarySearch(array, key) {

    let left = 0;
    let right = array.length;
    let middle;

    while (left <= right) {

        middle = Math.floor((left + right) / 2);
        console.log("left:", left, "middle:", array[middle], "right:", right);

        if (key === array[middle]) {
            return middle;
        }

        if (key < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch(array, key));
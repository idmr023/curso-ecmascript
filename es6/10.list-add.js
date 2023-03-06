const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);


//Eliminar los elementos repetidos en una sola línea
const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]
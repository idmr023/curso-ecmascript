//Nos devuelve una submatriz de una matriz. Arreglos anidados dentro de arreglos

const array = [1,1,2,3,4, [1,3,5,6, [1,2,4]]];
console.log(array.flatMap(3));

//flat-map mapeo cada uno de los elementos usados basados en una función de mapeo y luego aplana el resultado

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v,v*2]));
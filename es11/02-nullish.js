//Diferencias entre Or operator y Nullish Coalecing
//Or operator: Retorna el valor a la derecha si la expresión de la izquierda es FALSY (0, “”, false, NAN, undefined, null)
//Nullish coalecing: retorna el valor a la dera si la expresión es null o undefined

//Diferencia entre el operador OR y el Nullish coalescing 🔨 El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.

const anotherBigNumber = 5;
const validate = anotherBigNumber ?? 5;
const validate2 = anotherBigNumber || 5;
console.log(validate)
console.log(validate2)
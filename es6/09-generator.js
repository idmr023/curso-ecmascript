//Los generadores recuerdan su posición, no imprimen lo mismo 200 veces, sino que van avanzando
function* iterator(array){
    for(let value of array){ //Para cada valor del array
        yield value; //Retorna el valor      
    }
}

const it = iterator(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//Ejemplo 2
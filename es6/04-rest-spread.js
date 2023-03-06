const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'

//

const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno, dos, tres);


//spread operator
//Los 3 puntitos trae todo los valores de donde deseemos

let person = { name: 'Oscar', age:  21};
let country = 'MX';

let data = { id:1, ...person, country};
console.log(data);

//rest

function sum(num, ...values){
    console.log(num + values[0]);
    console.log(values);
    return num+values[0];
}
sum(1,1,2,3) //El primer 1 no sale pq corresponde a num


function solution(json1, json2) {
    json1 = json1 || {name: "Mr. Michi", food : "Pescado"};
    json2 = json2 || {age: 12, color : "Blanco"};
    return {... json1, ...json2};  
}

solution({
    name: "Bigotes",
    food: "Pollito"
});
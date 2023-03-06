//Optional chaining
//Es una forma de evitar errores solicitando propiedades de forma opcional utilizando el símbolo => ? , sirve cuando no estamos seguros de que los valores estén completos.

const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
console.log(users?.bebeloper?.country);
console.log(users?.gndx?.country);
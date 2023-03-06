const texto = 'Javascript es el mejor lenguaje. Javascript puede vivir en el navegador y en el servidor.'

const bbcita= texto.replace('Javascript', 'TypeScript'); // 'TypeScript es el mejor lenguaje. Javascript puede vivir en el navegador y en el servidor.'

const bbcito= texto.replaceAll('Javascript', 'TypeScript') // 'TypeScript es el mejor lenguaje. TypeScript puede vivir en el navegador y en el servidor.'

console.log(bbcita);
console.log(bbcito);
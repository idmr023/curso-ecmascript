//Objetos que nos permiten ejecutar un pedazo de código y cuando esté listo se devuelve, si hay algún error se regresa , 
//pero siempre regresará algo
//se coloca Async para que await funcione 
// const datos = [{
//     id: 1,
//     title: 'Iron Man',
//     year: 2008
// },{
//     id: 2,
//     title: 'Spider man',
//     year: 2017
// },{
//     id: 3,
//     title: 'Avengers: Endgame',
//     year: 2019
// }];

const getDatos = () => {
    return new Promise((resolve, reject) => {
    if (datos.length === 0){
        reject(new Error('No existen datos'));
    }
        setTimeout(() => {
        resolve(datos);
    }, 1500);

});
}
//Para que salte el error 
const datos = [];

/*getDatos()
    .then((datos) => console.log(datos));*/

async function fetchingData (){
    try {   
        const datosFetched = await getDatos();
        console.log(datosFetched);
    } catch (err) {
        console.log(err);
    }
}

fetchingData();
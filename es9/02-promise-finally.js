const anotherFunction = ()  => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!');
        } else {
            reject('Whoooops!');
        }
    })
}

anotherFunction()
    .then((response) => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally')); //Nos permite tener una función anónima que se ejecturá cuando termine la función

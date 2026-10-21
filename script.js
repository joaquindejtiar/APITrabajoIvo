fetch (`https://pokeapi.co/api/v2/pokemon`)
.then(response => response.json())
.then(data => {
    console.log(data);
    personajes = data.results;
    console.log(personajes);
})
.catch(error => {
    console.error(`Error al leer el archivo JSON:`, error);
})

let personajes = [];

const ElDad = document.getElementById("ElGranPadreID");

function mostrarPersonajes(lista) {
    personajes.innerHTML = ``

    lista.forEach( comida => {
        personajes.innerHTML += `
        
        `
    })
}
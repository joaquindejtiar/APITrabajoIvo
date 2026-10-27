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

function mostrarPersonajes() {
    ElDad.innerHTML = "";

    lista.forEach(personaje => {
        fetch(personaje.url)
            .then(response => response.json())
            .then(datosPokemon => {
                ElDad.innerHTML += `
                    <div class="personaje">
                        <h2>${datosPokemon.name}</h2>
                        <img src="${datosPokemon.sprites.front_default}" alt="${datosPokemon.name}">
                        <p>Altura: ${datosPokemon.height}</p>
                        <p>Peso: ${datosPokemon.weight}</p>
                    </div>
                `;
            })
            .catch(error => {
                console.error("Error al obtener un Pokémon:", error);
            });
    });
}
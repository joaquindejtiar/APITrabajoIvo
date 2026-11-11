fetch (`https://pokeapi.co/api/v2/pokemon`)
.then(response => response.json())
.then(data => {
    console.log(data);
    personajes = data.results;
    console.log(personajes);
    mostrarPersonajes();
})
.catch(error => {
    console.error(`Error al leer el archivo JSON:`, error);
})

let personajes = [];

const ElDad = document.getElementById("ElGranPadreID");

function mostrarPersonajes() {
    ElDad.innerHTML = "";

    personajes.forEach(personaje => {
        fetch(personaje.url)
            .then(response => response.json())
            .then(datosPokemon => {
                ElDad.innerHTML += `
                    <div class="personajeDiv">
                    <header class="elCabeza">
                        <h2 class="elNombre">${datosPokemon.name.toUpperCase()}</h2>
                        </header>
                        <body class="elCuerpo">
                        <article class="elDadImagen">
                        <img class="laImagen" src="${datosPokemon.sprites.front_default}" alt="${datosPokemon.name}">
                        </article>
                        <article class="AlturaYpeso">
                        <p class="laAltura">Altura: ${datosPokemon.height}</p>
                        <p class="elPeso">Peso: ${datosPokemon.weight}</p>
                        </article>
                        </body>
                    </div>
                `;
            })
            .catch(error => {
                console.error("Error al obtener un Pokémon:", error);
            });
    });
}
const mew = document.querySelector("#mew");
const URL = "https://pokeapi.co/api/v2/pokemon/151"; // pokemon 151 (mew)

fetch(URL)
    .then((response) => response.json())
    .then(data => mostrarPoke(data));

    function mostrarPoke(poke) {
        let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
        tipos = tipos.join('');
    
        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML = `
            <p class="pokemon-id">#${poke.id}</p>
            <div class="pokemon-imagen">
                <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
            </div>
            <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <h2 class="pokemon-nombre">${poke.name}</h2>
                </div>
                <div class="pokemon-tipos">
                    ${tipos}
                </div>
                <div class="pokemon-stats">
                    <p class="stat"><strong>Altura </strong>${poke.height}m</p>
                    <p class="stat"><strong>Peso </strong>${poke.weight}kg</p>
                    <p class="stat"><strong>Habilidades </strong>${poke.abilities.map(ability => ability.ability.name).join(',')}</p>
                </div>
            </div>
        `;
        mew.append(div);
    }
    
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn"); //add this to html doc
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types"); //
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");
const pokemonImageDiv = document.getElementById("pokemon-image");
const pokemonImage = document.getElementById("sprite");

const searchPokemon = async () => {
  const searchUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value}`;
  try {
    const res = await fetch(searchUrl);
    if (!res.ok) {
      alert("Pokémon not found");
    }
    const data = await res.json();
    pokemonName.textContent = "Name: " + data.name;
    pokemonId.textContent = "Id: " + data.id;
    pokemonWeight.textContent = "Weight: " + data.weight;
    pokemonHeight.textContent = "Height: " + data.height;
    pokemonTypes.textContent = "Type: " + data.types[0].type.name;
    pokemonHp.textContent = "Hp: " + data.stats[0].base_stat;
    pokemonAttack.textContent = "Attack: " + data.stats[1].base_stat;
    pokemonDefense.textContent = "Defense" + data.stats[2].base_stat;
    pokemonSpecialAttack.textContent = "Special Attack: " + data.stats[3].base_stat;
    pokemonSpecialDefense.textContent = "Special Defense: " + data.stats[4].base_stat;
    pokemonSpeed.textContent = "Speed: " + data.stats[5].base_stat;
    pokemonImage.textContent = pokemonImageDiv.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;
  } catch (error) {
    console.error(error.messsage);
  }
};

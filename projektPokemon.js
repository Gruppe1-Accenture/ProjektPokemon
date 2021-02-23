let index = null;
let pokemon = null;
let bild = document.getElementById("gesPokemon")
let name = document.getElementById("namePokemon")
document.getElementById("button").onclick = myFunction;

async function myFunction() {
    let x = document.getElementById("gesuchtesPokemon");
    x.className = "Pokemon";
    
    index = document.getElementById("input").value;
    pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + index + "/");
    pokemon = await pokemon.json();
    console.log(pokemon);

    bild.src = pokemon.sprites.front_default
    name.innerHTML = pokemon.name
};
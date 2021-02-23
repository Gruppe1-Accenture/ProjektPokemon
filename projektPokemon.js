let index = null;
let pokemon = null;
document.getElementById("button").onclick = myFunction;

async function myFunction() {
    index = document.getElementById("input").value;
    pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + index + "/");
    pokemon = await pokemon.json();
    console.log(pokemon);
};
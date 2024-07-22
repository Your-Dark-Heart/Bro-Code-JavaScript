// fetch(url, {options})



//! With Promises only
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not fetch the resource");
    }

    return response.json();
  })
  .then(data => console.log(data))
  .catch(error=> console.log(error));
*/




//! WIth async/await
/*
async function getPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    if (!response.ok) {
      throw new Error("Could not find this type of Pikachu :(");
    }
  
    const pikachuStats = await response.json();
    console.log(pikachuStats);
  }
  catch(error) {
     console.error(error);
  }

}

getPokemon();
*/



const button = document.querySelector("button");



button.addEventListener("click", getPokemon);


async function getPokemon() {
  try {

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not find this tyoe of Pokemon :(")
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
      
    imgElement.src = pokemonSprite;
    imgElement.style.display ="block";

  }
  catch(error) {
    console.error(error);
  }
}




/*
const url = "http://worldtimeapi.org/api/timezone/America/New_York";


async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  
}

getData();
*/

async function getPokemonData(){
    let pokemonApiUrlBase = "https://pokeapi.co/api/v2/pokemon/"

    let randomPokemonNumber = Math.floor(Math.random() * 1025)+1;

    let fullApiUrl = pokemonApiUrlBase + randomPokemonNumber;

    let response = await fetch(fullApiUrl);
    let responseData = await response.json();
    let result = responseData;

    return result;
}

async function putDataOnPage(dataToDisplay){
    document.getElementsByClassName("pokemonApiUrlBase")[0].textContent = "Name: " + dataToDisplay.name;

    let type1Display = document.getElementsByClassName("pokemonType1")[0];
    let type2Display = document.getElementsByClassName("pokemonType2")[0];

    type1Display.textContent = "Type 1: " + dataToDisplay.types[0].type.name;
    // type1Display.textContent = data.types[0]["type"]["name"];

    if (dataToDisplay.types[1]){
        // if the data includes a 2nd type, set that as well
        type2Display.textContent = "Type 2: " + dataToDisplay.types[1].type.name;
    } else {
        // if no 2nd type exists, reset the content in typ2
        type2Display.textContent = "Type 2: ";
    }

    // 3 line solution ↓
    let imageContainer = document.getElementsByClassName("pokemonImage")[0];
    let imageElement = imageContainer.getElementsByTagName("IMG")[0];
    imageElement.src = dataToDisplay.sprites.front_default;
    
    // 1 line solution ↓
    // document.querySelector(".pokemonImage img").src = dataToDisplay.sprites.front_default;

}

// button calls this 
async function getAndDisplayPokemonData(){
    let data = await getPokemonData();
    console.log(data);
    putDataOnPage(data);
}

document.getElementById("create-encounter").addEventListener("click", getAndDisplayPokemonData);
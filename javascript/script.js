let resp;
let userId = new Number(0);
userId = prompt("Choose a valid Pokedex Number(1-905)");



function setUserID() {
    userId = document.querySelector("#input-id").value;
    findPokemon();
}

// scarica post
function findPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${userId}/`)
    .then(response => response.json())
    .then(json => {
        resp = JSON.stringify(json);

        // salva post
        localStorage.setItem("item", resp);

        // visualizza post
        const post = localStorage.getItem("item");
        const respParsed = JSON.parse(post);//crea OGGETTO respParsed

        console.log(respParsed.name);


        const pkNameH2 = document.querySelector(".pk-name");
        pkNameH2.innerHTML = respParsed.name;
        const pkNumberH2 = document.querySelector(".pk-number");
        pkNumberH2.innerHTML = respParsed.id;
        const pkSpriteIMG = document.querySelector(".pk-sprite");
        pkSpriteIMG.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userId}.png`);
    }
    )
}

findPokemon();

function changeSpriteToShiny() {
    const pkSpriteIMG = document.querySelector(".pk-sprite");
    pkSpriteIMG.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${userId}.png`);
}
function changeSpriteToNormal() {
    const pkSpriteIMG = document.querySelector(".pk-sprite");
    pkSpriteIMG.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userId}.png`);
}

function previousPokemon() {
    if (userId >= 2) {
        userId--;
        fetch(`https://pokeapi.co/api/v2/pokemon/${userId}/`)
            .then(response => response.json())
            .then(json => {
                resp = JSON.stringify(json);

                // salva post
                localStorage.setItem("item", resp);

                // visualizza post
                const post = localStorage.getItem("item");
                const respParsed = JSON.parse(post);//crea OGGETTO respParsed

                console.log(respParsed.name);


                const pkNameH2 = document.querySelector(".pk-name");
                pkNameH2.innerHTML = respParsed.name;
                const pkNumberH2 = document.querySelector(".pk-number");
                pkNumberH2.innerHTML = respParsed.id;
                const pkSpriteIMG = document.querySelector(".pk-sprite");
                pkSpriteIMG.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userId}.png`);
            }
            )
    }

}

function nextPokemon() {
    if (userId <= 904) {
        userId++;
        fetch(`https://pokeapi.co/api/v2/pokemon/${userId}/`)
            .then(response => response.json())
            .then(json => {
                resp = JSON.stringify(json);

                // salva post
                localStorage.setItem("item", resp);

                // visualizza post
                const post = localStorage.getItem("item");
                const respParsed = JSON.parse(post);//crea OGGETTO respParsed

                console.log(respParsed.name);


                const pkNameH2 = document.querySelector(".pk-name");
                pkNameH2.innerHTML = respParsed.name;
                const pkNumberH2 = document.querySelector(".pk-number");
                pkNumberH2.innerHTML = respParsed.id;
                const pkSpriteIMG = document.querySelector(".pk-sprite");
                pkSpriteIMG.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userId}.png`);
            }
            )
    }

}
const PLAYERS_URL = "http://localhost:3000/api/v1/players"
const GAMES_URL = "http://localhost:3000/api/v1/games"

document.addEventListener('DOMContentLoaded', () => {
    getPlayers()

    const createGameForm = document.querySelector("#create-game-form")

    createGameForm.addEventListener("submit", (e) => createPlayerHandler(e))
});

function getPlayers() {
    return fetch(PLAYERS_URL)
        .then(res => res.json())
        .then(players => {
            players.data.forEach(player => {
                 const playerMarkup = `
                    <div data-id=${player.id}>
                    <h3>${player.attributes.username} - ${player.attributes.city}, ${player.attributes.state}</h3>
                    <p>Game: ${player.attributes.game.title}</p>
                    <p>Genre: ${player.attributes.game.genre}</p>
                    <p>Game Level: ${player.attributes.game.level}</p>
                    <p>Competitive: ${player.attributes.game.competitive}</p>
                    <button data-id=${player.id}>Group Up!</button>
                    </div>
                    <br><br>`;

                document.querySelector('#game-container').innerHTML += playerMarkup
            })
        })
}

function createPlayerHandler(e) {
    e.preventDefault()
    const playerInput =  document.querySelector("#player").value
    //const playerId = parseInt(document.querySelector('#player').value)

    const cityInput = document.querySelector("#input-city").value
    const stateInput = document.querySelector("#input-state").value

    postPlayerFetch(playerInput, cityInput, stateInput)
}

function postPlayerFetch(playerInput, cityInput, stateInput) {
    console.log(playerInput, cityInput, stateInput);

    let bodyData = {playerInput, cityInput, stateInput}

    fetch(PLAYERS_URL, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
        .then(response => response.json())
        .then(player => {
            console.log(player);

            //document.querySelector('#game-container').innerHTML += syllabusMarkup;
        })
}

function createGameHandler(e) {
    e.preventDefault()

    const titleInput =  document.querySelector("#input-title").value
    const genreInput = document.querySelector("#input-genre").value
    const levelInput = document.querySelector("#input-level").value
    const compInput = document.querySelector("#input-competitive").value

    postGameFetch(titleInput, genreInput, levelInput, compInput)
}

function postGameFetch(titleInput, genreInput, levelInput, compInput) {
    console.log(titleInput, genreInput, levelInput, compInput);

    let bodyData = {titleInput, genreInput, levelInput, compInput}

    fetch(PLAYERS_URL, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
        .then(response => response.json())
        .then(game => {
            console.log(game);

            //document.querySelector('#game-container').innerHTML += syllabusMarkup;
        })
}
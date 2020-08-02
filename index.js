const endPoint = "http://localhost:3000/api/v1/players"

document.addEventListener('DOMContentLoaded', () => {
    getPlayers()

    const createGameForm = document.querySelector("#create-game-form")

    createGameForm.addEventListener("submit", (e) => createFormHandler(e))
});

function getPlayers() {
    fetch(endPoint)
        .then(res => res.json())
        .then(players => {
            // remember our JSON data is a bit nested due to our serializer
            players.data.forEach(player => {
                // double check how your data is nested in the console so you can successfully access the attributes of each individual object
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

function createFormHandler(e) {
    e.preventDefault()
    const player =  document.querySelector("#player").value
    //const playerId = parseInt(document.querySelector('#player').value)

    const cityInput = document.querySelector("#input-city").value
    const stateInput = document.querySelector("#input-state").value

    const titleInput =  document.querySelector("#input-title").value
    const genreInput = document.querySelector("#input-genre").value
    const levelInput = document.querySelector("#input-level").value
    const compInput = document.querySelector("#input-competitive").value

    postFetch(player, cityInput, stateInput, titleInput, genreInput, levelInput, compInput)
}

function postFetch(player, city, state, title, genre, level, competitive) {
    console.log(player, city, state, title, genre, level, competitive);
}
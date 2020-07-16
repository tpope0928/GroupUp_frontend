const endPoint = "http://localhost:3000/api/v1/games"

document.addEventListener('DOMContentLoaded', () => {
    getGames()

    const createGameForm = document.querySelector("#create-game-form")
    createGameForm.addEventListener("submit", (e) => createFormHandler(e))

})


function getGames() {
    fetch(endPoint)
        .then(res => res.json())
        .then(games => {
            // remember our JSON data is a bit nested due to our serializer
            games.data.forEach(game => {
                // double check how your data is nested in the console so you can successfully access the attributes of each individual object
                const gameMarkup = `
                    <div data-id=${game.id}>
                        <h3>${game.attributes.user.username} - ${game.attributes.user.city}, ${game.attributes.user.state}</h3>
                        <p>Game: ${game.attributes.title}</p>
                        <p>Genre: ${game.attributes.genre}</p>
                        <p>Game Level: ${game.attributes.level}</p>
                        <p>Competitive: ${game.attributes.competitive}</p>
                        <button data-id=${game.id}>Group Up!</button>
                    </div>
                    <br><br>`;

                document.querySelector('#game-container').innerHTML += gameMarkup
            })
        })
}

function createFormHandler(e) {
    e.preventDefault()
    const cityInput = document.querySelector("#input-city").value
    const stateInput = document.querySelector("#input-state").value

    const titleInput =  document.querySelector("#input-title").value
    const genreInput = document.querySelector("#input-genre").value
    const levelInput = document.querySelector("#input-level").value
    const compInput = document.querySelector("#input-competitive").value
    const userInput = document.querySelector("#input-username").value
}


const endPoint = "http://localhost:3000/api/v1/games"

document.addEventListener('DOMContentLoaded', () => {
    getGames()
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
                        <h3>${game.attributes.user.username}</h3>
                        <p>${game.attributes.title}</p>
                        <button data-id=${game.id}>Group Up!</button>
                    </div>
                    <br><br>`;

                document.querySelector('#game-container').innerHTML += gameMarkup
            })
        })
}


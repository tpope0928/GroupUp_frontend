const endPoint = "http://localhost:3000/api/v1/players"

document.addEventListener('DOMContentLoaded', () => {
    getPlayerData()
})

function getPlayerData() {
    fetch(endPoint)
        .then(response => response.json())
        .then(playerData => {
            playerData.data.forEach(player => {
                // double check how your data is nested in the console so you can successfully access the attributes of each individual object
                const playerMarkup = `
                    <div data-id=${player.id}>
                        <h3>${player.attributes.username} - ${player.attributes.city}, ${player.attributes.state}</h3>
                        <p>Game: ${player.attributes.title}</p>
                        <p>Genre: ${player.attributes.genre}</p>
                        <p>Game Level: ${player.attributes.level}</p>
                        <p>Competitive: ${player.attributes.competitive}</p>
                        <button data-id=${player.id}>Group Up!</button>
                    </div>
                    <br><br>`;

                document.querySelector('#player-container').innerHTML += playerMarkup
            })
        })
}


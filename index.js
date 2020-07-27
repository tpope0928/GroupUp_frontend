const endPoint = "http://localhost:3000/api/v1/players"

document.addEventListener('DOMContentLoaded', () => {
    getPlayers()
});

function getPlayers() {
    fetch(endPoint)
        .then(response => response.json())
        .then(players => {
            console.log(players);
            players.data.forEach(player => {
                const playerMarkup = `
                    <div data-id=${player.id}>
                    <h3>${player.attributes.username} - ${player.attributes.city}, ${player.attributes.state}</h3>
                        <p>Game: ${player.attributes.games.title}</p>
                        <p>Genre: ${player.attributes.games.genre}</p>
                        <p>Game Level: ${player.attributes.games.level}</p>
                        <p>Competitive: ${player.attributes.games.competitive}</p>
                        <button data-id=${player.id}>Group Up!</button>
                    </div>
                    <br><br>`;
                document.querySelector('#player-container').innerHTML += playerMarkup
            })
        })
}

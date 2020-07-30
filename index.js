const endPoint = "http://localhost:3000/api/v1/players"

document.addEventListener('DOMContentLoaded', () => {
    getGames()
});

function getGames() {
    fetch(endPoint)
        .then(res => res.json())
        .then(games => {
            console.log(games)

        })
}

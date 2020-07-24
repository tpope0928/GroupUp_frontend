const endPoint = "http://localhost:3000/api/v1/players"

document.addEventListener('DOMContentLoaded', () => {
    getPlayerData()
})

function getPlayerData() {
    fetch(endPoint)
        .then(response => response.json())
        .then(playerData => {
            console.log(playerData)

        })
}


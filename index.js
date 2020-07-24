const endPoint = "http://localhost:3000/api/v1/players"

document.addEventListener('DOMContentLoaded', () => {
    fetch(endPoint)
        .then(response => response.json())
        .then(playerData => {
            console.log(playerData);
        })
})


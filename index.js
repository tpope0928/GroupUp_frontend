const endpoint = "http://localhost:3000/api/v1/games"

document.addEventListener('DOMContentLoaded', () => {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log();
        })
})


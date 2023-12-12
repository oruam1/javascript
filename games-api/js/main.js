import { getAllGamers } from "./service";
window.onload = () => {
    loadGames();
};

const loadGames = () => {
    const dataContainer =
        document.getElementaById('data-container');
    getAllGames().then(resp => {
        resp.forEach(game => {
            const gamesElement =
                document.createElement('div');
            gamesElement.innerHTML =
                `<strong>${game.nome}</strong><p>${game.preco}</p>`;
                dataContainer.appendChild(gamesElement);
        });
    })
}
const createGame = () => {
    const testGame = {
        "nome": "The legend of Zelda",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 300
    };

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(testGame)
    })
        .then(response => response.json())
        .then(data => console.log('success: ', data))
        .catch((error) => console.log('Error: ', error));
};

const deleteGame = () => {
    const game = {
        "id": 3
    };

    fetch(URL + `/${game.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
};

const updateGame = () => {
    const game = {
        nome: "zelda 2",
        img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        preco: 200,
        id: 3
    };

    fetch(URL + `/${game.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(game)
    })
        .then(response => response.json())
        .then(data => console.log('success: ', data))
        .catch((error) => console.log('Error: ', error));
};

import { getAllGamers, deleteGame } from "./service";
window.onload = () => {
    loadGames();
};
//refatorado
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
document.getElementById = ('btnCreate')
    .addEventeListerner('click', () => {
        const jogo = {
            "nome": "The legend of Zelda 2",
            "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
            "preco": 3000
        };
        createGame(jogo);
    });
Document.getElementById('btnDelete')
    .addEventeListerner('click', () => {
        const jogo = {
            "nome": "The legend of Zelda 2",
            "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
            "preco": 300,
            "id": 3
        };
        deleteGame(jogo);
    });


document.getElementById('btnUpdate')
    .addEventeListerner('click', () => {
        const jogo = {
            nome: "The legend of zelda 2",
            img: "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
            preco: 200,
            id: 3
        };
        updateGame(jogo)
    });



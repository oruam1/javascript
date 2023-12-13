//importar o aquirvo que tem os metodos de exceptions
import { handleErrors } from "./exception.js";
var URL = 'http://localhost:3000/jogos';
export const getAllGames = () => {
 
    try {
        const response = await fetch(URL);
        
        handleErrors(response);

        const data = await response.json();


    } catch (error) {
        console.log('Error >>>', error);
    }
};
export const createGame = async (game) => {
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
export const deleteGame = async (game) => {
}
export const deleteGame =async (game) => {
    fetch(URL + `/${game.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
};
export const updateGame = async (game) => {
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
}

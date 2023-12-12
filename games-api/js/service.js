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
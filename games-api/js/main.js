document.addEventListener('DOMContentLoaded', () => {
    const dataContainer =
        document.getElementById('data-container');

    //funcao para tratar erros
    const handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    // Função para buscar e exibir dados da API
    const fetchData = async () => {
        try {
            // Fazendo uma solicitação GET para obter produtos da API JSONPlaceholder
            const response =
                await fetch('http://localhost:3000/jogos');

            // Lidando com erros na resposta
            handleErrors(response);

            // Convertendo a resposta para JSON
            const data = await response.json();

            // Exibindo os dados na página
            data.forEach(produto => {
                const produtoElemento =
                    document.createElement('div');
                produtoElemento.innerHTML =
                    `<strong>${produto.nome}</strong><p>${produto.preco}</p>`

                dataContainer.appendChild(produtoElemento);
            });


        } catch (error) {
            console.log('erro ao buscar dados: ', error);
        }


    };
  fetchData() ; 
});
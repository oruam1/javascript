let alunos = [
    {
        nome: "fulano",
        email: "email",
        telefone: "9999999999",
        profissão: "carnavalesco"
    },
    { nome: "Jaque", email: "jaque@gmail.com", telefone: 21974450073, work: "backend" },
    { nome: "Julinha", email: "juju@msn.com", telefone: 21979984073, work: "fullstack" },
    { nome: "Lucao", email: "lucao@hotmail.com", telefone: 21954454075, work: "mobile" },
    { nome: "Inacio", email: "inacio@yahoo.com", telefone: 21977458473, work: "mobile" },
    { nome: "Maurao", email: "maurao@hotmail.com", telefone: 21944488576, work: "frontend" },
    { nome: "Ramonzao", email: "monzao@gmail.com", telefone: 2173484973, work: "frontend" },
    { nome: "Davizao", email: "davi@msn.com", telefone: 21975584073, work: "frontend" },

];

//carregar os dados na array na tabela
window.onload = (event) => {
    let tbody = document.querySelector("#myTable");
    alunos.forEach((aluno, index) => {

        let tr = document.createElement("tr");
        let tdCod = document.createElement("tr");
        let tdNome = document.createElement("tr");
        let tdEmail = document.createElement("tr");
        let tdTelefone = document.createElement("tr");
        let tdProfissao = document.createElement("tr");
        let tdBotao = document.createElement("tr");

        tdCod.textContent = index;
        tdNome.textContent = aluno.nome;
        tdEmail.textContet = aluno.email;
        tdTelefone.textContent = aluno.telefone;
        tdProfissao.textContent = aluno.profissao;
        tdBotao.innerHTML = `<button class="btn-remover" onclick="remover(this)" >Remover</button>`
       
        tr.appendChild(tdCod);
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdProfissao);
        tr.appendChild(tdBotao);
    
        tbody.appendChild(tr);

    })
}
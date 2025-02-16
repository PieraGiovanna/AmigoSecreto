// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function exibirTextoNaTela(elementId, texto) {
    let campo = document.getElementById(elementId);
    if (campo) { // Verifica se o elemento existe
        campo.innerHTML = texto;
    } else {
        console.error(`Elemento com o ID "${elementId}" não encontrado.`);
    }
}

function exibirAmigos() {
    let listaHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaHTML += `<li>${amigos[i]}</li>`; // Cria um item de lista para cada amigo
    }
    exibirTextoNaTela("listaAmigos", listaHTML); // Atualiza a lista de amigos
}

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim(); // Remove espaços em branco

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        exibirAmigos();
        document.getElementById("amigo").value = ""; // Limpa o campo de entrada
    } else if (amigos.includes(nome)) {
        alert(`${nome} já está na lista de amigos!`);
    } else {
        alert("Por favor, insira um nome.");
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione amigos antes de sortear.");
        return;
    }
    
    // Sorteia um amigo aleatoriamente
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    // Exibe o resultado no elemento de resultado
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
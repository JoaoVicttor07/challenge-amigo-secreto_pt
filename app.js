let amigos = [];

function adicionarAmigo() {
    let campoInput = document.getElementById('amigo').value;
    amigos.push(campoInput);

    if (campoInput === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = amigos.join('<br>');
}

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado foi: ${amigoSorteado}`;
    document.getElementById('listaAmigos').innerHTML = '';
    amigos = [];

}
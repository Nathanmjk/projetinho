var listaCarrinho = [];


window.onload = function() {
    listaCarrinho = JSON.parse(window.localStorage.getItem("Lista"));

    console.log(listaCarrinho);

    montaCarrinho();
}


function montaCarrinho() {

    document.getElementById("itens").innerHTML = "";

    for (var i = 0; i < listaCarrinho.length; i++) {
        var conteudo = "";

        conteudo += '<tr>';
        conteudo += '<td class="imagem">';
        conteudo += '<img src="img/' + listaCarrinho[i][0] + '" />';
        conteudo += '</td>';
        conteudo += '<td>' + listaCarrinho[i][1] + '</td>';
        conteudo += '<td class="quantidade">';
        conteudo += '<input class="qnt" type="number" placeholder="quantidade">';
        conteudo += '</td>';
        conteudo += '<td>';
        conteudo += '<td>' + listaCarrinho[i][2] + '</td>';
        conteudo += '</td>';
        conteudo += '</tr>';



        document.getElementById("itens").innerHTML += conteudo;
    }
}
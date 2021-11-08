var array_jogos = [['Free-Fire', 'produto1.png'], ['Call-of-Dutty', 'produto3.png']];

window.onload = function(){
    montaCards();
}

function montaCards(){
    for(var i=0;i< array_jogos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="cards-produtos">';
        conteudo += '<div class="card-produtoIMG">';
        conteudo += '<img src="img/' + array_jogos[i][1] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="card-produtoDESC">';
        conteudo += array_filmes[i][0];
        conteudo += '</div>';
        conteudo += '</div>';
        

        document.getElementById("divprodutos").innerHTML += conteudo;

    }
}
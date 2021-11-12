var array_jogos = [['Freefas.png', 'Free Fire | PS4', 'R$ 70,00', false, 0], ['Tubarao.png', 'Tubarao Marcelo | PS4', 'R$ 85,00',false, 1],
['Watch.png', 'Watch Zap | PS4', 'R$160,00',false, 2], ['WDL.png', 'Wash DOGS | PS4', 'R$140,00',false, 3], ['Mario.png', 'Mario | PS4', 'R$60,00',false, 4],
['RD3.png', 'Red Dead Redemption III | PS4', 'R$180,00',false, 5], ['GTA 6.jpg', 'GTA VI | PS5', 'R$260,00',false, 6], ['NFS.jpg', 'Need for Speed | PS4', 'R$70,00',false, 7]];

var carrinho = [];

window.onload = function(){
    montaCards();
}

function montaCards(){

    document.getElementById("jogos").innerHTML = "";

    for(var i=0; i< array_jogos.length; i++)
    {
        var conteudo = "";

        conteudo += '<div class="div-cards">';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="img/' + array_jogos[i][0] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-desc">' + array_jogos[i][1] + '</div>';
        conteudo += '<div class="div-card-desc2">' + array_jogos[i][2] + '</div>';


        if(array_jogos[i][3] == false)
        {
            conteudo += '<div class="div-card-desc3" onclick="comprar(' + array_jogos[i][4] + ')"> Adicionar ao carrinho</div>';
        }
        else
        {
            conteudo += '<div class=" adicionado"> Adicionado</div>';
        }
        
        conteudo += '</div>';
        conteudo += '</div>';
        




        document.getElementById("jogos").innerHTML += conteudo;


    }
}


function comprar(id){

    array_jogos[id][3] = true;

    carrinho.push(array_jogos[id]);

    window.localStorage.setItem("Lista", JSON.stringify(carrinho));

    montaCards();
    
}


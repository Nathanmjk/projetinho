function checkboxSenha () {
    var senha=document.getElementById("senha");
    if(senha.type=="password") {
        senha.type="text";
    } else {
        senha.type="password";
    }
}

function checkboxconfirm () {
    var senha=document.getElementById("senhaconfirm");
    if(senha.type=="password") {
        senha.type="text";
    } else {
        senha.type="password";
    }
}
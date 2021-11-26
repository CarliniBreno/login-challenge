function alerta(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    
    if (login == "flavio@basesocial.org") {
        alert ("Login Succesfully!")
    }
    else {
        alert ("Login failed.")
    }
    if (password == "macacoflavio") {
        alert ("Login Succesfully!")
    }
    else {
        alert ("Login failed.")
    }
}

function verificarLogin(){
    var emailCerto = document.getElementById("email").value;
    var senhaCerto = document.getElementById("senha").value;

    if(emailCerto == "caioba123@gmail.com"){
        if(senhaCerto == "123"){
            alert("Usuário logado com sucesso!")
        } else{
            alert("Algo deu errado, verefique o email e a senha")
        }

    }else{
        alert("Algo deu errado, verefique o email e a senha")
    }
}
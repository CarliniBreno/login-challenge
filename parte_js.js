function verificarLogin(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if(login == "flavio@basesocial.org"){
        if(password == "123"){
            alert("Login Succesfully!")
        } else{
            alert("Login failed")
        }

    }else{
        alert("Login failed")
    }
    if(login == ""){
        alert("Insira seus dados!")
    }
}
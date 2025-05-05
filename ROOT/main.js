let username = "";

function openMenu() {
    username = document.querySelector(".username").value
    window.location.href="mainscreen.html"
}

function exibirPerfil() {
    document.querySelector(".usernamecamp").innerHTML = "Usuário";
    document.querySelector(".userimgcamp").src="simlucas.jpg";
}
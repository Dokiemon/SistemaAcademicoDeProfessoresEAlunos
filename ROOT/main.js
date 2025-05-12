let username = "";

function openLogin() {
    username = document.querySelector(".username").value
    window.location.href="mainscreen.html"
}

function openMenu(){
    let menu = document.querySelector('ul');
    menu.style.display = 'block';
    let button = document.querySelector('.material-symbols-outlined');
    button.style.margin = '20vh';

}

function exibirPerfil() {
    document.querySelector(".usernamecamp").innerHTML = "Usuário";
    document.querySelector(".userimgcamp").src="simlucas.jpg";
}
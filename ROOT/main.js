let username = "";
let ismenuopen = false;

function openLogin() {
    username = document.querySelector(".username").value //sim, muito bonito este codigo, pena que não funciona
    window.location.href="mainscreen.html";
}

function returnLogin() {
    window.location.href="index.html";
}

function openMenu(){
    if (ismenuopen == false) {
        ismenuopen = true;
        let menu = document.querySelector('ul');
        menu.style.display = 'block';
        let button = document.querySelector('.material-symbols-outlined');
        button.style.marginLeft = '20vh';
    }
    else if (ismenuopen == true) {
        ismenuopen = false;
        let menu = document.querySelector('ul');
        menu.style.display = 'none';
        let button = document.querySelector('.material-symbols-outlined');
        button.style.marginLeft = '0vh';
    }

}

function exibirPerfil() {
    document.querySelector(".usernamecamp").innerHTML = "Usuário";
    document.querySelector(".userimgcamp").src="simlucas.jpg";
}
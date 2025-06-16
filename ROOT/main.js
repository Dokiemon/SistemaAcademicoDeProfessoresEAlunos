let username = "";
let ismenuopen = false;
let isuseropen = false;

function openLogin() {
    fetch("data.json")
        .then(res => res.json)
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

document.querySelector(".openuser").addEventListener("click", function(event) {
    event.stopPropagation();
    exibirPerfil();
});

function exibirPerfil() {
    fetch("data.json")
        .then(res => res.json())
        .then(usuarios => {
            const usuario = usuarios.find(usuario => usuario.id == "1")

            document.querySelector(".username2").innerHTML = usuario.nome;
        })
    console.log('abriu');
    document.querySelector(".modal").style.display = 'block';
    document.querySelector(".userimgcamp").src="simlucas.jpg";
    isuseropen = true;
}

    window.onclick = function () {
        if (isuseropen) {
            document.querySelector(".modal").style.display = "none";
            isuseropen = false;
            console.log("fechou")
        }
    }

/*window.onclick = (event) => {
    if (isuseropen) {
        document.querySelector(".modal").style.display = 'none';
    }
}*/
/* Bom dia, boa tarde ou boa noite, o codigo mais espaguete q vc vai ver, se estiver procurando onde implementar o banco de dados, pesquise por returnLogin*/
let username = "";
let ismenuopen = false;
let isuseropen = false;

function openLogin() { //função para abrir a mainscreen
    let username = document.querySelector(".username").value //sim, muito bonito este codigo, pena que não funciona //eu sou pica e agr ele funciona
    fetch("data.json")
        .then(res => res.json())
        .then(users => {
            let user = users.find(u => u.nome == username);

            if (user) {
                let password = document.querySelector(".password").value;
                if (user.password == password) {
                    window.location.href="mainscreen.html";
                }
                else {
                    alert("Usuário ou senha inválida.")
                }
            }
            else {
                alert("Usuário ou senha inválida.")
            }
        })
}

function returnLogin() { //retorna pro login quando você cria um novo usuário
    let username = document.querySelector(".newusername").value;
    fetch("data.json")
        .then(res => res.json())
        .then(users => {
            if(users.find(u => u.nome == username)) {
                alert("Nome de usuário já existente.")
            }
            else {
                alert("Usuário criado!") //aqui voce vai implementar o bd aqui para ele add usuários, o html da página é o singin.html
                window.location.href="index.html";
            }
        }
        )
}

function openMenu(){ //abre o menu principal que ainda deve estar com o nome do Diabeto pq eu duvido da minha capacidade cognitiva.
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
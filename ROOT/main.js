/* Bom dia, boa tarde ou boa noite, o codigo mais espaguete q vc vai ver, se estiver procurando onde implementar o banco de dados, pesquise por returnLogin*/
/*a bosta provavelmente está na LINHA 19*/
let username = "";
let ismenuopen = false;
let isuseropen = false;

function openLogin() { //função para abrir a mainscreen
    let username = document.querySelector(".username").value //sim, muito bonito este codigo, pena que não funciona //eu sou pica e agr ele funciona //parou de funcionar
    fetch("data.json")
        .then(res => res.json())
        .then(users => {
            let user = users.find(u => u.username == username);

            if (user) {
                let password = document.querySelector(".password").value;
                console.log("senha digitada:" + password)
                if (user.password == password) {
                    console.log("senha correta")
                    localStorage.getItem("id", user.id);
                    //window.location.href="mainscreen.html";
                    console.log(localStorage.getItem("id"))
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
            if(users.find(u => u.username == username)) {
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

function exibirPerfil() {
    console.log(localStorage.getItem("id"))
    fetch("data.json")
        .then(res => res.json())
        .then(usuarios => {
            const usuario = usuarios.find(usuario => usuario.id.value == localStorage.getItem("id"))
            document.querySelector(".username2").innerHTML = usuario.nome;
            document.querySelector(".mail").innerHTML = "Mail: " + usuario.mail;
            document.querySelector(".phone").innerHTML = "Fone: " + usuario.phone;
            document.querySelector(".username").innerHTML = "Usuário: " + usuario.username;
        })
    console.log('abriu');
    document.querySelector(".modal").style.display = 'block';
    document.querySelector(".userimgcamp").src="simlucas.jpg";
    isuseropen = true;
}

function closeMenu() {
    if (isuseropen) {
        document.querySelector(".modal").style.display = "none";
        isuseropen = false;
        console.log("fechou")
    }
}

function logOff() {
    sessionStorage.clear();
    window.location.href="index.html";
}

function openClasses() {
    fetch(data.json)
        .then(res => res.json())
        .then(turmas_list => {
            const usuario = usuarios.find(usuario => usuario.id.value == localStorage.getItem("id"))
            const turmas = usuario.turmas.value;
            console.log(turmas);

        })
}

/*window.onclick = (event) => {
    if (isuseropen) {
        document.querySelector(".modal").style.display = 'none';
    }
}*/
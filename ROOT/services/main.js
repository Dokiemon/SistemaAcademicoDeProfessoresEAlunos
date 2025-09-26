/* Bom dia, boa tarde ou boa noite, o codigo mais espaguete q vc vai ver, se estiver procurando onde implementar o banco de dados, pesquise por returnLogin*/
/*por mais fantastico que pareça, o js está funcionando, oq tenho que fazer é refatorar o css*/
/*refatorar o css = apagar tudo e pegar do chat gpt*/
let username = "";
let ismenuopen = false;
let isuseropen = false;
const loginButton = document.querySelector(".Login-Button");

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".Login-Button");

    loginButton.addEventListener("click", () => {
        const username = document.querySelector(".username").value;
        const password = document.querySelector(".password").value;

        if (!username || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        // Busca o usuário no localStorage
        const storedUser = localStorage.getItem(username);

        if (!storedUser) {
            alert("Usuário não encontrado.");
            return;
        }

        const userData = JSON.parse(storedUser);

        if (userData.password === password) {
            // Salva o usuário logado completo
            localStorage.setItem("usuarioLogado", JSON.stringify({
                username: username,
                ...userData
            }));
            alert("Login realizado com sucesso!");
            window.location.href = "mainscreen.html";
        } else {
            alert("Senha incorreta.");
        }
    });
});



function openMenu(){ //abre o menu principal que ainda deve estar com o nome do Diabeto pq eu duvido da minha capacidade cognitiva.
    let menu = document.querySelector('ul');
    if (!ismenuopen) {
        ismenuopen = true;
        menu.classList.add('menu-aberto');
    } else {
        ismenuopen = false;
        menu.classList.remove('menu-aberto');
    }

}

function exibirPerfil() {
    closeTurmas();
    let usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuario) {
        document.querySelector(".username2").innerHTML = usuario.nome || usuario.username;
        document.querySelector(".mail").innerHTML = "Mail: " + (usuario.mail || "");
        document.querySelector(".phone").innerHTML = "Fone: " + (usuario.phone || "");
        document.querySelector(".username").innerHTML = "Usuário: " + usuario.username;
        document.querySelector(".userimgcamp").src = usuario.img || "/ROOT/assets/nopicture.jpg";
    } else {
        // Se não achou no localStorage, tenta buscar do data.json
        let id = localStorage.getItem("id");
        fetch("/ROOT/services/data.json")
            .then(res => res.json())
            .then(data => {
                usuario = data.usuarios.find(u => u.id == id);
                if (usuario) {
                    document.querySelector(".username2").innerHTML = usuario.nome || usuario.username;
                    document.querySelector(".mail").innerHTML = "Mail: " + (usuario.mail || "");
                    document.querySelector(".phone").innerHTML = "Fone: " + (usuario.phone || "");
                    document.querySelector(".username").innerHTML = "Usuário: " + usuario.username;
                    document.querySelector(".userimgcamp").src = usuario.img || "/ROOT/assets/nopicture.jpg";
                } else {
                    alert("Usuário não encontrado!");
                }
            });
    }
    document.querySelector(".modal").style.display = 'block';
    isuseropen = true;
}

function closeMenu() { //acredito que esse if seja desnescessario, mas é melhor não mexer em time que tá ganhando
    if (isuseropen) {
        document.querySelector(".modal").style.display = "none";
        isuseropen = false;
        console.log("fechou")
    }
    closeTurmas() //isso aqui tambem deve ser apagado em breve, quando eu terminar a aba "sobre"
}
function closeTurmas() {
    console.log("oi")
    const modal = document.querySelector(".modal-turmas");
    modal.style.display = "none";
    modal.innerHTML = "";
}

function logOff() {
    sessionStorage.clear();
    window.location.href="index.html";
}

function exibirTurmas() {
    console.log("Função ta ativando");
    closeMenu();
    fetch("/ROOT/services/data.json")
        .then(res => res.json())
        .then(data => {
            console.log(localStorage.getItem("id"));
            const usuario = data.usuarios.find(usuario => usuario.id == localStorage.getItem("id"));
            const turmas = usuario.turmas; 
            console.log(turmas);
            document.querySelector(".modal-turmas").style.display = "block";
            turmas.forEach(turma => {
                let turmaButton = document.createElement('button');
                turmaButton.setAttribute('class', 'turma-button');
                turmaButton.setAttribute('id', turma);
                let turmaNome = data.turmas.find(t => t.id == turma);
                turmaButton.innerHTML = turmaNome.nome;
                    turmaButton.onclick = function() {
                        exibirDetalheTurma(turmaNome.nome);
                    };
                    document.querySelector(".modal-turmas").appendChild(turmaButton);
            })
        })
function exibirDetalheTurma(nomeTurma) {
    const modal = document.querySelector('.modal-turma-detalhe');
    modal.style.display = 'block';
    document.querySelector('.turma-nome').textContent = nomeTurma;
    // Participantes já estão fixos no HTML, apenas exibe o modal e o nome da turma
    document.querySelector('.ver-notas').onclick = function() {
        alert('Funcionalidade de notas em desenvolvimento!');
    };
    document.querySelector('.fechar-turma').onclick = function() {
        modal.style.display = 'none';
    };
}
}

/*window.onclick = (event) => {
    if (isuseropen) {
        document.querySelector(".modal").style.display = 'none';
    }
}*/
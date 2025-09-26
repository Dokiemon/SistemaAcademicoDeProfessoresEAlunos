function exeCadastro() {
    const username = document.querySelector('.newusername').value;
    const password = document.querySelector('.newpassword').value;
    const mail = document.querySelector('.newmail').value;
    const phone = document.querySelector('.newphone').value;
    const nome = document.querySelector('.newpname').value;

    if (!username || !password || !mail || !phone || !nome) {
        alert("Preencha todos os campos!");
        return;
    }

    // Verifica se usuário já existe
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
        alert("Usuário já cadastrado!");
        return;
    }

    // Salva usuário com todos os campos
    localStorage.setItem(username, JSON.stringify({
        username,
        password,
        mail,
        phone,
        nome,
        img: "/ROOT/assets/nopicture.jpg"
    }));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
}
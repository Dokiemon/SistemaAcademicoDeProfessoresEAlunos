function exeCadastro() {
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;

    if (!username || !password) {
        alert("Preencha todos os campos!");
        return;
    }

    // Verifica se usuário já existe
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
        alert("Usuário já cadastrado!");
        return;
    }

    // Salva usuário
    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
}

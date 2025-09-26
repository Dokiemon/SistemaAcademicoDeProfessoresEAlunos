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
            alert("Login realizado com sucesso!");
            window.location.href = "mainscreen.html";
        } else {
            alert("Senha incorreta.");
        }
    });
});

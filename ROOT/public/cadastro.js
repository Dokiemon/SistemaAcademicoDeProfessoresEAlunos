function exeCadastro() {
    const usernome = document.querySelector(".newusername");
    const senha = document.querySelector(".newpassword");
    const email = document.querySelector(".newmail");
    const telefone = document.querySelector(".newphone");
    const nome = document.querySelector(".newpname");

    if (!usernome.value || !senha.value || !nome.value) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    if (!email.value && !telefone.value) {
        alert("Por favor, preencha pelo menos um campo de contato (email ou telefone).");
        return;
    }

    const response = fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usernome,
            password: senha,
            mail: email,
            phone: telefone,
            name: nome
        })
    })
    .then(res => res.json())
    .catch(err => { 
        alert("Erro ao enviar usuário: " + err);
        console.log(usernome.value, senha.value, email.value, telefone.value, nome.value);
        return;
    });
}
function Login() {
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;

    if (!username || !password) {
            alert("Preencha todos os campos!");
            return;
        }

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
}
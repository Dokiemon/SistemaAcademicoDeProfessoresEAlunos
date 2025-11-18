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
        body: JSON.stringify({ 
            username: username,
            password: password
        })
    })
    .then(res => {
        if (res.redirected) {
            window.location.href = res.url;
            return;
        }
        return res.json();
    })
    .then(data => {
        if (data && data.message)
            alert(data.message);
    })
    .catch(err => console.error(err));
}

let userName = document.querySelector(".username");
let password = document.querySelector(".password");

const exeCadastro = async () => {
  try {
    const valueUser = userName.value.trim();
    const valuePassword = password.value;

    if (!valueUser || !valuePassword) {
      alert('Preencha todos os campos');
      return;
    }

    const response = await fetch('/ROOT/services/server.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName: valueUser, password: valuePassword })
    });

    if (response.ok) {
      alert('Cadastro realizado com sucesso');
      // opcional: redirecionar ou limpar formulário
    } else {
      const err = await response.json().catch(() => ({ error: 'Erro' }));
      alert('Erro: ' + (err.error || 'Problema no cadastro'));
    }
  } catch (err) {
    console.error(err);
    alert('Erro de rede ou inesperado');
  }
};

// exemplo: conectar ao submit do form (se houver)
document.querySelector('#cadastroForm')?.addEventListener('submit', e => {
  e.preventDefault();
  exeCadastro();
});
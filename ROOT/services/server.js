const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const path = require("path");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
// Agora aceita JSON **e** formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta services
app.use(express.static(path.join(__dirname, "services")));

// Rota principal -> abre o formulário
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "services", "signin.html"));
});

// Rota para cadastro
app.post('/cadastro', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('POST /cadastro body:', req.body);

    if (!username || !password) {
      return res.status(400).json({ error: 'Campos vazios' });
    }

    const existing = await prisma.usuario.findUnique({ where: { username } });
    if (existing) {
      return res.status(409).json({ error: 'Usuário já existe' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.usuario.create({
      data: { username, password: hashed }
    });

    res.status(201).json({ ok: true, id: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/cadastro', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Campos vazios' });

    const existing = await prisma.usuario.findUnique({ where: { username } });
    if (existing) return res.status(409).json({ error: 'Usuário já existe' });

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
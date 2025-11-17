import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CadastroUser from './services/db.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB conectado com sucesso!");
    }
    catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

connectDB();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/', (req, res) => {
    CadastroUser.findOne({ 
        username: req.body.username,
        password: req.body.password
    })
    .then(user => {
        if (user) {
            // Redirect without sending an extra response
            return res.redirect('/mainscreen');
        } 
        else {
            return res.status(401).send({ success: false, message: "Usuário ou senha incorretos." });
        }
    })
    .catch(error => {
        console.error("Erro na autenticação:", error);
        res.status(500).send({ success: false, message: "Erro interno." });
    });
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/public/register.html")
})

app.post('/register', (req, res) => {
    const newUser = new CadastroUser({
        username: req.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        name: req.body.name,
    });
    newUser.save()
        .then(() => res.send('Cadastro realizado com sucesso!'))
        .catch(err => res.status(400).send('Erro ao cadastrar usuário: ' + err));
});
if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log("Servidor rodando na porta: " + PORT);
    });
}
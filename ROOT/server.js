import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/public/register.html")
})

// app.post('/register', (req, res) => {
//     // Lógica para processar o cadastro do usuário
//     res.send('Cadastro realizado com sucesso!'); 
// });

if (process.env.NODE_ENV !== 'test' || process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log("Servidor rodando na porta: " + PORT);
    });
}
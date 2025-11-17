import mongoose from 'mongoose';

const CadastroUserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: String,
    name: String, 
})

export default mongoose.model('CadastroUser', CadastroUserSchema); 
import './signIn.css';
import '../../css/responsive.css';

import LogoCubos from '../../assets/logoCubos.svg';

import { Link } from 'react-router-dom';
import api from '../../services/api';
import { FormEvent, useState } from 'react';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(evt: FormEvent) {
        evt.preventDefault();

        try {

            if (!email || !password) {
                throw new Error('Preecha todos os campos');
            }

            const response = await api.post('/login', {
                email,
                password
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <div className='cardSignIn'>
                <img src={LogoCubos} alt='Logo da Cubos' />

                <form className='formCubos' onSubmit={handleSubmit}>
                    <input type='email' placeholder='E-mail' value={email}
                        onChange={(evt) => setEmail(evt.target.value)} />

                    <input type='password' placeholder='Passaword' value={password}
                        onChange={(evt) => setPassword(evt.target.value)} />

                    <span>Não tem cadastro? <Link to='/'>Clique aqui!</Link></span>

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
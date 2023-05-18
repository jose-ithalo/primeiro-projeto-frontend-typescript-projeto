import './signIn.css';
import '../../css/responsive.css';

import LogoCubos from '../../assets/logoCubos.svg';

import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className='container'>
            <div className='cardSignIn'>
                <img src={LogoCubos} alt='Logo da Cubos' />
                <form>
                    <input type='text' placeholder='E-mail' />
                    <input type='password' placeholder='Passaword' />

                    <span>Não tem cadastro? <Link to='/'>Clique aqui!</Link></span>

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
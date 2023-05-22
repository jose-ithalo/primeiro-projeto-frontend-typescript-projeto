import './header.css';
import logoCubos from '../../assets/logoCubos.svg';
import arrowBack from '../../assets/arrowBack.svg';
import { useNavigate } from 'react-router-dom';

type PropHeader = {
    showArrow?: boolean
}

function Header({ showArrow }: PropHeader) {

    const navigate = useNavigate();

    return (
        <header>
            {
                showArrow &&
                <img src={arrowBack} alt='Ícone para voltar' className='arrowBack'
                    onClick={() => navigate(-1)} />
            }

            <img src={logoCubos} alt='Logo da Cubos' />

        </header>
    )
}

export default Header;
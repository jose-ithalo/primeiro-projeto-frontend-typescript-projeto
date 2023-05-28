import './detail.css';

import Header from "../../components/Header";
import Avatar from '../../components/Avatar';

function TeacherDeatail() {
    return (
        <div className="container">
            <Header showArrow={true} />
            <div className="cardDetail">
                <Avatar
                    image='https://static.vecteezy.com/system/resources/thumbnails/009/749/751/small/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg'
                    size={170}
                />
                <h1>Exemplo</h1>
                <span>BackEnd</span>

                <div className='horizontalLine'></div>

                <h2>Bio</h2>

                <p>
                    Olá, sou Daniel, mas pode me chamar de Dani. Acredito que a vida só faz sentido quando você descobre quem é e para onde está indo e vejo, na Educação, o caminho mais curto para encontrar este sentido.
                </p>
            </div>
        </div>
    )
}

export default TeacherDeatail;
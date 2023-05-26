import './detail.css';

import Header from "../../components/Header";
import Avatar from '../../components/Avatar';

function TeacherDeatail() {
    return (
        <div className="container">
            <Header showArrow={true} />
            <div className="cardDetail">
                <Avatar
                    image='https://static.vecteezy.com/system/resources/thumbnails/009/749/751/small/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg' />

            </div>
        </div>
    )
}

export default TeacherDeatail;
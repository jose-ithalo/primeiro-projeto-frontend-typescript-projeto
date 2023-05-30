import './detail.css';

import Avatar from '../../components/Avatar';
import Header from "../../components/Header";
import useDetail from '../../hooks/useDetail';

function TeacherDeatail() {

    const { selectedTeacher } = useDetail();

    return (
        <div className="container">
            <Header showArrow={true} />
            <div className="cardDetail">
                <Avatar image={selectedTeacher?.avatar!} size={170} />

                <h1>{selectedTeacher?.name}</h1>
                <span>{selectedTeacher?.stack}</span>

                <div className='horizontalLine'></div>

                <h2>Bio</h2>

                <p>{selectedTeacher?.bio}</p>
            </div>
        </div>
    )
}

export default TeacherDeatail;
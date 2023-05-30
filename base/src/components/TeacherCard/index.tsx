import './card.css';

import Avatar from '../Avatar';
import useDetail from '../../hooks/useDetail';
import { useNavigate } from 'react-router-dom';
import Teacher from '../../types/teacherType';

type PropTeacher = {
    teacher: Teacher
}

function TeacherCard({ teacher }: PropTeacher) {

    const navigate = useNavigate();
    const { handleInsertTeacher } = useDetail();

    function handleNavTeacher() {

        handleInsertTeacher(teacher);

        navigate('/TeacherDetail');
    }

    return (
        <div className='teacherCard' onClick={handleNavTeacher}>
            <Avatar image={teacher.avatar} />
            <h1 className='nameTeacher'>{teacher.name}</h1>
        </div>
    );
}

export default TeacherCard;
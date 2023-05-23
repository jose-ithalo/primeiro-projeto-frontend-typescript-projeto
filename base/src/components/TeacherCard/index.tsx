import './card.css';

import Avatar from '../Avatar';

type PropTeacher = {
    teacher: {
        id: number,
        avatar: string,
        name: string
    }
}

function TeacherCard({ teacher }: PropTeacher) {
    return (
        <div className='teacherCard'>
            <Avatar image={teacher.avatar} />
            <h1 className='nameTeacher'>{teacher.name}</h1>
        </div>
    );
}

export default TeacherCard;
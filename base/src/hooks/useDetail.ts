import Teacher from "../types/teacherType";

import { useState } from 'react';

function useDetail() {

    const [selectedTeacher, setSelectedTeacher] = useState<Teacher>(
        localStorage.getItem('current-teacher')
            ? JSON.parse(localStorage.getItem('current-teacher')!) :
            { id: 0, name: '', avatar: '', bio: '', stack: '' }
    );

    function handleInsertTeacher(teacher: Teacher): void {

        localStorage.setItem('current-teacher', JSON.stringify(teacher));
        setSelectedTeacher(teacher);

    }

    return {
        handleInsertTeacher,
        selectedTeacher
    }

}

export default useDetail;
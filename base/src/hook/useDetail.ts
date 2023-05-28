import Teacher from "../types/teacherType";

function useDetail() {

    function handleInsertTeacher(teacher: Teacher): void {

        localStorage.setItem('current-teacher', JSON.stringify(teacher));

    }

    function handleGetTeacher(): Teacher | null {

        const currentTeacher = localStorage.getItem('current-teacher') ?
            JSON.parse(localStorage.getItem('current-teacher')!) :
            null

        return currentTeacher;
    }

    return {
        handleInsertTeacher,
        handleGetTeacher
    }

}

export default useDetail;
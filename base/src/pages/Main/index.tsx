import './main.css';

import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';
import api from '../../services/api';

import { useEffect, useState } from 'react';

type Teacher = {
  id: number,
  name: string,
  avatar: string,
  stack: string,
  bio: string
}

function Main() {

  const [teacherList, setTeacherList] = useState<Teacher[]>([]);

  async function loadTeachers() {
    try {

      const response = await api.get('/teachers');

      setTeacherList([...response.data]);

    } catch {
      alert('Erro ao carregar os dados');
    }
  }

  useEffect(() => {
    loadTeachers();

  }, []);


  return (
    <div className='container'>
      <Header />
      <div className='boxTeachers'>
        {teacherList.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>

    </div>
  );
}

export default Main;

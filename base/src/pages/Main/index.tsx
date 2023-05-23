import './main.css';

import Header from '../../components/Header';
import TeacherCard from '../../components/TeacherCard';

function Main() {
  return (
    <div className='container'>
      <Header />
      <TeacherCard teacher={{
        id: 1,
        avatar: 'https://static.vecteezy.com/system/resources/thumbnails/009/749/751/small/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg',
        name: 'Desconhecido'
      }} />
    </div>
  );
}

export default Main;

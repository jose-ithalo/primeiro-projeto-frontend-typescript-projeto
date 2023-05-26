import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import TeacherDeatail from './pages/TeacherDetail';
import useAuth from './hook/useAuth';

type Prop = {
    redirectTo: string
}

function ProtectedRoutes({ redirectTo }: Prop) {

    const { handleGetToken } = useAuth();

    return handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />

}

function MainRoutes() {
    return (
        <Routes>
            <Route path='/'>
                <Route path='/' element={<SignIn />} />
                <Route path='/SignIn' element={<SignIn />} />
            </Route>

            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/Main' element={<Main />} />
                <Route path='/TeacherDetail' element={<TeacherDeatail />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;
import { Route, Routes } from "react-router-dom";
import ButtonsPage from "./pages/ButtonsPage";
import HomePage from './pages/HomePage';

export default function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<ButtonsPage />} />
            <Route path='/home' element={<HomePage />} />
        </Routes>
    )
}
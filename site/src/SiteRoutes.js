import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Listar from './pages/Listar';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastrar' element={<Cadastrar />} />
                <Route path='/listaranimes' element={<Listar />} />
            </Routes>
        </BrowserRouter>
    );
}
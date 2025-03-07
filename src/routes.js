import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Sobre from './pages/Sobre';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <Index /> } />
        <Route path='/sobre' element={ <Sobre /> } />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Sobre from './pages/Sobre';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';
import PaginaPadrao from 'components/PaginaPadrao';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <PaginaPadrao /> }>
          <Route path='/' element={ <Index /> } />
          <Route path='/sobre' element={ <Sobre /> } />
        </Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

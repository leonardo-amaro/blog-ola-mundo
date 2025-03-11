import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Sobre from './pages/Sobre';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';
import PaginaPadrao from 'components/PaginaPadrao';
import Post from 'pages/Post';
import Erro404 from 'pages/Erro404';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <PaginaPadrao /> }>
          <Route index element={ <Index /> } />
          <Route path='sobre' element={ <Sobre /> } />
        </Route>
        <Route path='post/:id' element={ <Post /> } />
        <Route path='*' element={ <Erro404 /> } />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

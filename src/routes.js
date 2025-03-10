import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Sobre from './pages/Sobre';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';
import PaginaPadrao from 'components/PaginaPadrao';
import Post from 'pages/Post';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <PaginaPadrao /> }>
          <Route index element={ <Index /> } />
          <Route path='sobre' element={ <Sobre /> } />
          <Route path='post' element={ <Post /> } />
        </Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

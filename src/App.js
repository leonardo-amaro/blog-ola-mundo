import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Sobre from './pages/Sobre';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <Index /> } />
        <Route path='/sobre' element={ <Sobre /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

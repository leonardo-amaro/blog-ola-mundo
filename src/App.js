import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index /> } />
        <Route path='/sobre' element={ <Sobre /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

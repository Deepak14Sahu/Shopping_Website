
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import ProductList from './Component/ProductList';
import LoginPage from './Component/LoginPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<ProductList />} />
      </Routes>
    </>
  )

}

export default App;

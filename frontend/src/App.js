import { Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar';
import ProductList from './Component/ProductList';
import LoginPage from './Component/LoginPage';
import Footer from './Component/Footer';
import LandingPage from './Component/LandingPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<ProductList />} />
      </Routes>
      <Footer />

    </>
  )

}

export default App;

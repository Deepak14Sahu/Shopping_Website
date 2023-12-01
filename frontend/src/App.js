import { Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar';
import ProductList from './Pages/ProductList';
import LoginPage from './Pages/LoginPage';
import Footer from './Component/Footer';
import LandingPage from './Pages/LandingPage';
import RegisterPage from './Pages/RegisterPage';
import { ProtectedRoute, ProtectedLoginRoute } from './Component/ProtectedRoute';
import ProductDetails from './Pages/ProductDetails';
import { PageNotFound } from './Pages/PageNotFound';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<ProtectedLoginRoute><LoginPage /></ProtectedLoginRoute>} />
        <Route path='/register' element={<ProtectedLoginRoute><RegisterPage /></ProtectedLoginRoute>} />
        <Route path='/products' element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
        <Route path='/products/:productId' element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />

    </>
  )

}

export default App;

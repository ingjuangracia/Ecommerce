import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login, ProductDetail, Purchases, AddCart } from './pages'
import LoadingScreen from './components/LoadingScreen';
import { useSelector } from 'react-redux';
import { NavBar } from './components';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addCart" element={<AddCart />} />
        
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />

        </Route>


      </Routes>
    </HashRouter>

  );
}

export default App;

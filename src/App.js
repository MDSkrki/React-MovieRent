import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { Banner } from './components/Banner/Banner';
import { useSelector } from 'react-redux';
import { SignUp } from './containers/SignUp/SignUp';
import { Login } from './containers/Login/Login';

function App() {
  // Hooks
  const bannerVisible = useSelector((state) => state.banner.visible);

  return (
    <div className="App">
      {bannerVisible && <Banner />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

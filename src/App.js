import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { Banner } from './components/Banner/Banner';
import { useSelector } from 'react-redux';
import { SignUp } from './containers/SignUp/SignUp';
import { Login } from './containers/Login/Login';
import { Profile } from './containers/Profile/Profile';
import { PopularMovies } from './containers/PopularMovies/PopularMovies';
import { MovieDetail } from './containers/MovieDetail/MovieDetail';
import { Admin } from './containers/Admin/Admin';

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
        <Route path='/profile' element={<Profile />} />
        <Route path='/popular' element={<PopularMovies />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

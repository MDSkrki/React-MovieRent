import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { Banner } from './components/Banner/Banner';
import { useSelector } from 'react-redux';

function App() {
  // Hooks
  const bannerOpen = useSelector((state) => state.banner.open);
  
  return (
    <div className="App">
      {bannerOpen && <Banner />}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

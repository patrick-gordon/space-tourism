import './App.css';

import { Routes, Route, Outlet } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='destination' element={<Destination />} />
            <Route path='crew' element={<Crew />} />
            <Route path='technology' element={<Technology />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

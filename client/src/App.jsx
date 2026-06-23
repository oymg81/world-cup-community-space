import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:locationName" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
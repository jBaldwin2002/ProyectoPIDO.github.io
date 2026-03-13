import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Intercambio from './pages/Intercambio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/intercambio" element={<Intercambio />} />
      </Routes>
    </Router>
  );
}

export default App;

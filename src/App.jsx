import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        
        <Route path="/authpage" element={<AuthPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
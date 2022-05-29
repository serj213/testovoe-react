import './App.css';

import { Routes, Route } from 'react-router-dom';

import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import News from './pages/News';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

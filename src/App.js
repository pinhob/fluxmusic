import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Albums, Artists, Homepage } from './pages';

function App() {
  return (
    <>
      <h1>FluxMusic</h1>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/artistas" element={<Artists />} />
        <Route path="/albuns" element={<Albums />} />
      </Routes>
    </>
  );
}

export default App;

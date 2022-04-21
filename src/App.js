import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Artists, Homepage } from './pages';

function App() {
  return (
    <>
      <h1>FluxMusic</h1>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </>
  );
}

export default App;

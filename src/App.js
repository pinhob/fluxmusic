import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages';

function App() {
  return (
    <>
      <h1>FluxMusic</h1>

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;

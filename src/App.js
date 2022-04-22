import { Routes, Route } from 'react-router-dom';
import { Albums, Artists, Homepage, NewsFeed, News } from './pages';
import { Header } from './components';
import { GlobalStyle } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/artistas" element={<Artists />} />
        <Route path="/albuns" element={<Albums />} />
        <Route path="noticias" element={<NewsFeed />} />
        <Route path="noticias/:id" element={<News />} />
      </Routes>
    </>
  );
}

export default App;

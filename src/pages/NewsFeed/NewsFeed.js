import { useEffect, useState } from 'react';
import { NewsList } from '../../components';

const NewsFeed = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('fluxMusic'));

    if (!data) {
      return setNews(false);
    }

    setNews(data.news);
  }, []);

  return (
    <main>
      <h1>Notícias</h1>
      {
        news
          ? <NewsList news={news} />
          : 'Nenhuma notícia encontrada'
      }
    </main>
  )
};

export default NewsFeed;

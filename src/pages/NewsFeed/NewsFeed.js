import { useEffect, useState } from 'react';
import { getNews } from '../../api';
import { NewsCard } from '../../components';

const NewsFeed = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { data: news } } = await getNews();
        setNews(news);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>Notícias</h1>
      {
        news
          ? <NewsCard news={news} />
          : 'Carregando...'
      }
    </main>
  )
};

export default NewsFeed;

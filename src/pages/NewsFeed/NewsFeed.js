import { useEffect, useState } from 'react';
import { NewsList } from '../../components';
import { StyledNewsFeed } from '../../styles';
import { Loader } from '../../helpers';


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
    <StyledNewsFeed>
      <h1>Notícias</h1>
      {
        news
          ? <NewsList news={news} />
          : <Loader />
      }
    </StyledNewsFeed>
  )
};

export default NewsFeed;

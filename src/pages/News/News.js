import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState(null);
  const params = useParams();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fluxMusic"));

    if (!data) {
      return setNews(false);
    }

    const currentNews = data.news.filter((news) => news.id === Number(params.id))[0];

    console.log('current', currentNews);

    setNews(currentNews);
  }, [params]);

  return (
    <div>
      {
        news
          ? (
            <article>
              <h3>Notícia</h3>
              <h1>{news.title}</h1>
              <h2>{news.subtitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
            </article>
          )
          : 'Carregando...'
      }
    </div>
  )
};

export default News;
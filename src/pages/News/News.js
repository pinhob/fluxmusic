import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SanitizeHTML, Loader } from "../../helpers";
import { StyledNews } from "../../styles";

const News = () => {
  const [news, setNews] = useState(null);
  const params = useParams();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fluxMusic"));

    if (!data) {
      return setNews(false);
    }

    const currentNews = data.news.filter((news) => news.id === Number(params.id))[0];

    setNews(currentNews);
  }, [params]);

  return (
    <div>
      {
        news
          ? (
            <StyledNews>
              <h4>Notícia</h4>
              <h1>{news.title}</h1>
              <h2>{news.subtitle}</h2>
              <h3>{news.date} | Escrito por {news.source} </h3>
              <SanitizeHTML html={news.content} />
            </StyledNews>
          )
          : <Loader />
      }
    </div>
  )
};

export default News;
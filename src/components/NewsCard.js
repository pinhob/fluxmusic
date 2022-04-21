import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    news && news.map((news) => (
      <article key={news.id}>
        <h2>
          <Link to={`noticias/${news.id}`}>
            {news.title}
          </Link>
        </h2>
        <h3>{news.subtitle}</h3>
      </article>
    ))
  )
};

export default NewsCard;

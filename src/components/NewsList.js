import { Link } from "react-router-dom";

const NewsList = ({ news }) => {
  return (
    news && news.map((news) => (
      <article key={news.id}>
        <h4>{news.date} | Escrito por {news.source} </h4>
        <h2>
          <Link to={`${news.id}`}>
            {news.title}
          </Link>
        </h2>
        <h3>{news.subtitle}</h3>
      </article>
    ))
  )
};

export default NewsList;

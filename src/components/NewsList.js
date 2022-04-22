import { Link } from "react-router-dom";
import NewsBackground from '../assets/images/news_bg.jpg';
import { StyledNewsList } from "../styles";

const NewsList = ({ news }) => {
  return (
    news && news.map((news) => (
      <StyledNewsList key={news.id}>
        <img src={NewsBackground} alt="Template background" />
        <h4 className="c-card__infos">{news.date} | Escrito por {news.source} </h4>
        <h2>
          <Link to={`${news.id}`} className="c-card__title">
            {news.title}
          </Link>
        </h2>
        <h3 className="c-card__description">{news.subtitle}</h3>
      </StyledNewsList >
    ))
  )
};

export default NewsList;

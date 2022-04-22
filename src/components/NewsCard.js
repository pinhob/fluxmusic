import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/news_bg.jpg";
import { StyledNewsCard } from "../styles";

const NewsCard = ({ news }) => {
  return (
    news && news.map((news) => (
      <StyledNewsCard key={news.id}>
        <img src={backgroundImage} alt="" />
        <h2>
          <Link to={`noticias/${news.id}`} className="c-card__title">
            {news.title}
          </Link>
        </h2>
        <p className="c-card__description">{news.subtitle}</p>
      </StyledNewsCard>
    ))
  )
};

export default NewsCard;

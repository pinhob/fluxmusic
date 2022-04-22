import { Link } from "react-router-dom";
import { StyledTitle, StyledSection } from "../styles";

const SectionWrapper = ({ children, title, linkPath }) => {
  return (
    <StyledSection>
      {
        title && <h1 className="c-wrapper__title">
          <Link to={linkPath}>
            {title}
          </Link>
        </h1>
      }
      {children}
      {
        linkPath && <span>
          <Link to={linkPath} className="c-wrapper__button">
            Ver mais
          </Link>
        </span>
      }
    </StyledSection>
  )
};

export default SectionWrapper;

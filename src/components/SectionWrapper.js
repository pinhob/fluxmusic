import { Link } from "react-router-dom";
import { StyledSection } from "../styles";

const SectionWrapper = ({ children, title, linkPath }) => {
  return (
    <StyledSection>
      {
        title && (
          <>
            {linkPath
              ? (
                <h1 className="c-wrapper__title">
                  <Link to={linkPath}>
                    {title}
                  </Link>
                </h1>)
              : (<h1>{title}</h1>)
            }
          </>
        )
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

import { Link } from "react-router-dom";
import { StyledTitle } from "../styles";

const SectionWrapper = ({ children, title, linkPath }) => {
  return (
    <section>
      {
        title && <StyledTitle><Link to={linkPath}>{title}</Link></StyledTitle>
      }
      {children}
      {
        linkPath && <span><Link to={linkPath}>Ver todos</Link></span>
      }
    </section>
  )
};

export default SectionWrapper;

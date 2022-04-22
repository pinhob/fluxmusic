import { Link } from "react-router-dom";
import { StyledHeader } from "../styles";


const Header = () => {
  return (
    <StyledHeader>
      <h1><Link to="/" className="header__title">fluxMusic</Link></h1>
      <nav>
        <ul>
          <li>
            <Link to="/noticias">
              Notícias
            </Link>
          </li>
          <li>
            <Link to="/artistas">
              Artistas
            </Link>
          </li>
          <li>
            <Link to="/albuns">
              Álbuns
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header;

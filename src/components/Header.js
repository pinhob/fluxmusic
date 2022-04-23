import { Link } from "react-router-dom";
import { StyledHeader } from "../styles";
import Logo from '../assets/fluxmusic_logo_64.png';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" className="header__logo">
        <img src={Logo} alt="" />
        <h1 className="header__title">
          fluxMusic
        </h1>
      </Link>

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

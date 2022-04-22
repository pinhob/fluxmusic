import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h1><Link to="/">fluxMusic</Link></h1>

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
  )
}

export default Header;

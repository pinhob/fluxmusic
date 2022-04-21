import { useEffect, useState } from "react";
import { getNews, getArtists, getAlbums } from '../../api';
import { Link } from 'react-router-dom';
import { ArtistsCards, AlbumsCards, NewsCard } from "../../components";
import { StyledTitle } from "../../styles";

const Homepage = () => {
  const [news, setNews] = useState(null);
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { data: news } } = await getNews();
        setNews(news);

        const { data: { data: artists } } = await getArtists();
        setArtists(artists);

        const { data: { data: albums } } = await getAlbums();
        setAlbums(albums);

        const allData = {
          news,
          artists,
          albums
        };

        localStorage.setItem('fluxMusic', JSON.stringify(allData));

        console.log('news\n', news, '\nartists\n', artists, '\nalbums\n', albums);
      } catch (error) {
        console.log(error);
      }
    }

    const data = JSON.parse(localStorage.getItem('fluxMusic'));

    if (!data) {
      return fetchData();
    }

    setNews(data.news);
    setArtists(data.artists);
    setAlbums(data.albums);
  }, [])

  return (
    <main>
      <section>
        <StyledTitle><Link to="/noticias">Notícias</Link></StyledTitle>
        {
          news
            ? (
              <div>
                <NewsCard news={news.slice(0, 3)} />
                <span>
                  <Link to='/noticias'>Ver todos</Link>
                </span>
              </div>
            )
            : 'Carregando...'
        }
      </section>

      <section>
        <StyledTitle><Link to="/artistas">Artistas</Link></StyledTitle>
        {
          artists
            ? (
              <div>
                <ArtistsCards artists={artists.slice(0, 4)} />
                <span>
                  <Link to='/artistas'>Ver todos</Link>
                </span>
              </div>
            )
            : 'Carregando...'
        }
      </section>

      <section>
        <StyledTitle><Link to="/albuns">Álbuns</Link></StyledTitle>
        {
          albums
            ? (
              <div>
                <AlbumsCards albums={albums.slice(0, 5)} />            <span>
                  <Link to='/albuns'>Ver todos</Link>
                </span>
              </div>
            )
            : 'Carregando...'
        }
      </section>
    </main>
  )
}

export default Homepage;

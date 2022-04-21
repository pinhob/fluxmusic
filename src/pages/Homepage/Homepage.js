import { useEffect, useState } from "react";
import { getNews, getArtists, getAlbums } from '../../api';
import { Link } from 'react-router-dom';
import { ArtistsCards, AlbumsCards } from "../../components";

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

        console.log('news\n', news, '\nartists\n', artists, '\nalbums\n', albums);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [])

  return (
    <main>
      <section>
        <h1>Notícias</h1>
        {
          news
            ? news.map((news) => (
              <article key={news.id}>
                <h2>{news.title}</h2>
                <h3>{news.subtitle}</h3>
              </article>
            ))
            : 'Carregando...'
        }
      </section>

      <section>
        <h1><Link to="/artists">Artistas</Link></h1>
        {
          artists
            ? (
              <div>
                <ArtistsCards artists={artists.slice(0, 3)} />
                <span>
                  <Link to='/artistas'>Ver todos</Link>
                </span>
              </div>
            )
            : 'Carregando...'
        }
      </section>

      <section>
        <h1><Link to="/albuns">Álbuns</Link></h1>
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

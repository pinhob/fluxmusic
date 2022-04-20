import { useEffect, useState } from "react";
import { getNews, getArtists, getAlbums } from '../../api';

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
        <h1>Artistas</h1>
        {
          artists
            ? artists.map((artist) => (
              <article key={artist.id}>
                <h2>{artist.name}</h2>
              </article>
            ))
            : 'Carregando...'
        }
      </section>

      <section>
        <h1>Álbuns</h1>
        {
          albums
            ? albums.map((album) => (
              <article key={album.id}>
                <h2>{album.title}</h2>
              </article>
            ))
            : 'Carregando...'
        }
      </section>
    </main>
  )
}

export default Homepage;

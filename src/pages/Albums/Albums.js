import { useEffect, useState } from 'react';
import { getAlbums } from '../../api';

const Albums = () => {
  const [albums, setAlbums] = useState(null);

  const fetchAlbums = async () => {
    try {
      const { data: { data: albums } } = await getAlbums();
      setAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('fluxMusic'));

    if (!data) {
      return fetchAlbums();
    }

    setAlbums(data.albums);
  }, []);

  return (
    <div>
      <h1>Álbuns</h1>
      {
        albums
          ? albums.map((album) => (
            <article key={album.id}>
              <h2>{album.title}</h2>
            </article>))
          : 'Carregando...'
      }
    </div>
  );
};

export default Albums;

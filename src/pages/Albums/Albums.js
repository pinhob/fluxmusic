import { useEffect, useState } from 'react';
import { getAlbums } from '../../api';

const Albums = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { data: albums } } = await getAlbums();
        setAlbums(albums);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  });
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

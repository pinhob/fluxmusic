import { useEffect, useState } from 'react';
import { AlbumsCards } from '../../components';
import { getAlbums } from '../../api';
import { StyledContent } from '../../styles';
import { Loader } from '../../helpers';

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
    <StyledContent>
      <h1 className='c-title'>Álbuns</h1>
      {
        albums
          ? <div className="--flex-row">
            <AlbumsCards albums={albums} />
          </div>
          : <Loader />
      }
    </StyledContent>
  );
};

export default Albums;

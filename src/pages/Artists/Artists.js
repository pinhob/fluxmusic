import { useEffect, useState } from "react";
import { getArtists } from '../../api';
import ArtistsCards from "../../components/ArtistsCard";

const Artists = () => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { data: artists } } = await getArtists();
        setArtists(artists);
        console.log('artists\n', artists);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>Artistas</h1>
      {
        artists
          ? <ArtistsCards artists={artists} />
          : 'Carregando...'
      }
    </main>
  )
};

export default Artists;

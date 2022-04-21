import { useEffect, useState } from "react";
import { getArtists } from '../../api';
import ArtistsCards from "../../components/ArtistsCard";

const Artists = () => {
  const [artists, setArtists] = useState(null);

  const fetchArtists = async () => {
    try {
      const { data: { data: artists } } = await getArtists();
      setArtists(artists);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('fluxMusic'));

    if (!data) {
      return fetchArtists();
    }

    setArtists(data.artists);
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

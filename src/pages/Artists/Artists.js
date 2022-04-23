import { useEffect, useState } from "react";
import { getArtists } from '../../api';
import ArtistsCards from "../../components/ArtistsCard";
import { StyledContent } from "../../styles";

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
    <StyledContent>
      <h1 className="c-title">Artistas</h1>
      {
        artists
          ? <div className="--flex-row">
            <ArtistsCards artists={artists} />
          </div>
          : 'Carregando...'
      }
    </StyledContent>
  )
};

export default Artists;

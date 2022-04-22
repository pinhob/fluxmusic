import { StyledArtistCard } from "../styles";
import georgeHarrison from "../assets/images/george_harrison.png";

const ArtistsCards = ({ artists }) => {
  return (
    artists && artists.map((artist) => (
      <StyledArtistCard key={artist.id}>
        <figure>
          <img src={georgeHarrison} alt={artist.name} className="c-card__img" />
          <figcaption>
            <h2 className="c-card__title">{artist.name}</h2>
          </figcaption>
        </figure>
      </StyledArtistCard>))
  )
};

export default ArtistsCards;
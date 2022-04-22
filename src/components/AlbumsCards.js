import { StyledAlbumCard } from "../styles";
import georgeHarrison from "../assets/images/george_harrison.png";

const AlbumsCards = ({ albums }) => {
  return (
    albums && albums.map((album) => (
      <StyledAlbumCard key={album.id}>
        <img src={georgeHarrison} alt="Album cover" className="c-card__img" />
        <h2 className="c-card__title">{album.title}</h2>
        <h3 className="c-card__year">{album.release_date.split('-')[0]}</h3>
      </StyledAlbumCard>))
  )
};

export default AlbumsCards;

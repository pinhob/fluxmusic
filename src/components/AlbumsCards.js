import { StyledAlbumCard } from "../styles";
import freakOutCover from "../assets/images/freak_out_album.jpg";

const AlbumsCards = ({ albums }) => {
  return (
    albums && albums.map((album) => (
      <StyledAlbumCard key={album.id}>
        <img src={freakOutCover} alt="Album cover" className="c-card__img" />
        <h2 className="c-card__title">{album.title}</h2>
        <h3 className="c-card__year">{album.release_date.split('-')[0]}</h3>
      </StyledAlbumCard>))
  )
};

export default AlbumsCards;

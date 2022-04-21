const AlbumsCards = ({ albums }) => {
  return (
    albums && albums.map((album) => (
      <article key={album.id}>
        <h2>{album.title}</h2>
      </article>))
  )
};

export default AlbumsCards;

const ArtistsCards = ({ artists }) => {
  return (
    artists && artists.map((artist) => (
      <article key={artist.id}>
        <h2>{artist.name}</h2>
      </article>))
  )
};

export default ArtistsCards;
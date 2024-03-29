import { useEffect, useState } from "react";
import { getNews, getArtists, getAlbums } from '../../api';
import {
  ArtistsCards,
  AlbumsCards,
  NewsCard,
  SectionWrapper
} from "../../components";
import { Loader } from "../../helpers";
import { StyledHomepage } from "../../styles";

const Homepage = () => {
  const [news, setNews] = useState(null);
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { data: news } } = await getNews();
        setNews(news);

        const { data: { data: artists } } = await getArtists();
        setArtists(artists);

        const { data: { data: albums } } = await getAlbums();
        setAlbums(albums);

        const allData = {
          news,
          artists,
          albums
        };

        localStorage.setItem('fluxMusic', JSON.stringify(allData));

        console.log('news\n', news, '\nartists\n', artists, '\nalbums\n', albums);
      } catch (error) {
        console.log(error);
      }
    }

    const data = JSON.parse(localStorage.getItem('fluxMusic'));

    if (!data) {
      return fetchData();
    }

    setNews(data.news);
    setArtists(data.artists);
    setAlbums(data.albums);
  }, [])

  return (
    <StyledHomepage>
      {
        news && artists && albums
          ? (
            <>
              <SectionWrapper title="Notícias" linkPath="/noticias">
                <div class="c-card__wrapper">
                  <NewsCard news={news.slice(0, 3)} />
                </div>
              </SectionWrapper>

              <SectionWrapper title="Artistas" linkPath="/artistas">
                <div className="c-card__wrapper --flex-row">
                  <ArtistsCards artists={artists.slice(0, 4)} />
                </div>
              </SectionWrapper>

              <SectionWrapper title="Álbuns" linkPath="/albuns">
                <div className="c-card__wrapper --flex-row">
                  <AlbumsCards albums={albums.slice(0, 4)} />
                </div>
              </SectionWrapper>
            </>

          )
          : <Loader />
      }
    </StyledHomepage >
  )
}

export default Homepage;

import styled from "styled-components";

const StyledArtistCard = styled.article`
  figure {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: (2, auto);
    margin: 0;
    padding: 0;
  }

  .c-card__img {
    border-radius: 15px;
    grid-column: 1/2;
    grid-row: 1/3;
    width: 100%;
    object-fit: cover;
    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
    mask-image: linear-gradient(to top, transparent 5%, black 100%);
  }

  figcaption {
    font-size: 170%;
    grid-column: 1/2;
    grid-row: 2/3;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 750px) {
    max-width: 49%;

    figcaption {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1000px) {
    figcaption {
      font-size: 3rem;
    }
  }
`;

export default StyledArtistCard;

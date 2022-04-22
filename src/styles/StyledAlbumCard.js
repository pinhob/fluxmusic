import styled from "styled-components"

const StyledAlbumCard = styled.article`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  gap: 0.3rem;

  .c-card__img {
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
  }

  .c-card__title {
    font-size: 2rem;
  }

  .c-card__year {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: var(--dark-grey);
    padding: 0.5rem;
    border-radius: 15px;
  }

  @media (min-width: 750px) {
    width: 48%;
  }

  @media (min-width: 1000px) {
    width: 24%;
    justify-content: space-between;
    text-align: center;
  }
`;

export default StyledAlbumCard;

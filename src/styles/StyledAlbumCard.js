import styled from "styled-components"

const StyledAlbumCard = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 0.3rem;

  .c-card__img {
    width: 48%;
    border-radius: 15px;
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
`;

export default StyledAlbumCard;

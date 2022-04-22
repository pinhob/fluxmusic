import styled from "styled-components";

const StyledNewsCard = styled.article`
  /* align-items: center; */
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);

  img {
    min-width: 200px;
    width: 100%;
    grid-column: 1 / 2;
    grid-row: 1 / 5;
    object-fit: cover;
  }

  .c-card__title {
    color: var(--secondary-color-green);
    font-size: 1.5rem;
    text-decoration: none;
  }

  .c-card__description {
    display: none;
  }

  @media (min-width: 750px) {
    img {
      max-height: 250px;
      align-self: stretch;
    }

    .c-card__description {
      display: block;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

`;

export default StyledNewsCard;

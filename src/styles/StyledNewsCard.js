import styled from "styled-components";

const StyledNewsCard = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  width: 100%;

  img {
    border-radius: 5px;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    object-fit: cover;
    width: 100%;
  }

  h2 {
    grid-column: 1 / 3;
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
      align-self: stretch;
      grid-column: 1/ 2;
      grid-row: span 5;
      max-height: 250px;
    }

    h2 { 
      grid-column: 2 / 3;
    }

    .c-card__description {
      display: block;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

`;

export default StyledNewsCard;

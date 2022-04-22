import styled from "styled-components/macro";

const StyledNewsList = styled.article`
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

  .c-card__infos {
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

    .c-card__infos {
      background-color: var(--dark-grey);
      border-radius: 15px;
      display: inline;
      padding: 0.5rem 0;
      text-align: center;
      width: 100%;
    }
  }
`;

export default StyledNewsList;

import styled from "styled-components/macro";

const StyledHomepage = styled.main`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  .c-card__wrapper {
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
  }

  .c-card__wrapper article:hover {
    background-color: var(--dark-grey);
    border-radius: 15px;
    transition: background-color 0.3s ease;
  }

  .--flex-row {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
  }
`;

export default StyledHomepage;

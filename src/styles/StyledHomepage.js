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

  .c-card__wrapper--flex-row {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
  }
`;

export default StyledHomepage;

import styled from "styled-components/macro";

const StyledContent = styled.main`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 0 1rem;

  .c-title {
    font-size: 3rem;
  }

  article:hover {
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

export default StyledContent;

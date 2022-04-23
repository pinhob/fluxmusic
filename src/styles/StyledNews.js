import styled from "styled-components/macro";

const StyledNews = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
  padding: 0 1rem;

  h1 {
    color: var(--secondary-color-green);
    font-size: 2rem;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  h3 {
    font-weight: 500;
  }

  h4 {
    align-self: flex-start;
    background-color: var(--tertiary-dark-grey);
    border-radius: 15px;
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem;
  }

  h4:hover {
    background-color: var(--dark-grey);
    transition: background-color 0.3s ease;
  }

  a {
    color: var(--secondary-color-green);
    cursor: pointer;
  }

  p {
    font-size: 1.2rem;
  }
`;

export default StyledNews;

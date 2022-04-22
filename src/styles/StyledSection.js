import styled from "styled-components/macro";

const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;

  .c-wrapper__button {
    background-color: var(--secondary-color-green);
    border-radius: 15px;
    color: var(--secondary-color-white);
    display: block;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    padding: 1rem;
  }

  .c-wrapper__title {
    font-size: 2.5rem;
  margin: 1rem 0;
  }

  .c-wrapper__title a {
    cursor: pointer;
    text-decoration: none;
    color: var(--secondary-color-white);
    transition: color 0.3s ease;
  }
  
  .c-wrapper__title a:hover {
    color: var(--secondary-color-green);
  }
`;

export default StyledSection;

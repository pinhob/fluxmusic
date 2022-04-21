import styled from 'styled-components/macro';

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  margin: 1rem 0;

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--secondary-color-white);
  }

  a:hover {
    color: var(--secondary-color-green);
  }
`;

export default StyledTitle;

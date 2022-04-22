import styled from "styled-components/macro";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .header__title {
    color: var(--secondary-color-white);
    font-weight: 800;
    font-size: 2rem;
  }

  a {
    color: white;
    cursor: pointer;
    display: block;
    text-decoration: none;
  }

  nav ul {
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    gap: 2rem;
    list-style: none;
    align-items: stretch;
  }

  nav ul li {
    display: block;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 1rem;
    transition: all 0.3s ease;
  }

  nav ul li:hover {
    font-weight: 600;
    background-color: var(--tertiary-dark-grey);
    transition: background-color 0.3s ease;
  }
`

export default StyledHeader;

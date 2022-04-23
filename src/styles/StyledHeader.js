import styled from "styled-components/macro";

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  max-width: 100%;
  margin-bottom: 1.5rem;

  .header__logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header__logo:hover {
    cursor: pointer;
  }

  .header__title {
    color: var(--secondary-color-white);
    font-weight: 800;
    font-size: 2rem;
  }

  .header__logo img {
    width: 42px;
  }

  a {
    color: white;
    cursor: pointer;
    display: block;
    text-decoration: none;
  }

  nav {
    display: none;
  }

  @media (min-width: 750px) {
    flex-flow: column nowrap;
    justify-content: center;

    nav {
      display: block;
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
  }

  @media (min-width: 1000px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`

export default StyledHeader;

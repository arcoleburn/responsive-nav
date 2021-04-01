import styled from 'styled-components';

export const MobileMenu = styled.div`
  background-color: var(--background);
  height: 100vh;

  header {
    background-color: var(--darkText);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    span,
    svg {
      color: white;
    }
  }
  .back {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-bottom: solid 1px var(--borders);
    svg {
      font-size: 15px;
      padding-right: 10px;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    background-color: white;
    .sub {
      background-color: var(--background);
    }

    div {
      font-size: 15px;
      border-bottom: solid 1px var(--borders);
      padding: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      svg {
        font-size: 15px;
      }
    }
  }

  .end {
    display: flex;
    flex-direction: column;
    padding: 10px;
    div {
      padding: 10px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: 'Noto Sans';
      font-size: 15px;
      font-weight: bold;
      svg {
        padding: 0 5px;
        font-size: 15px;
      }
    }
  }
  .final-nav {
    padding: 5px 15px;
    text-decoration: none;
  }
`;

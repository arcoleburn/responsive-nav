import styled from 'styled-components';

export const MobileHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  font-size: 22px;
  align-items: center;

  .menu,
  .options {
    display: flex;
    flex-direction: row;

    align-items: center;
  }

  svg,
  img {
    font-size: 22px;
    padding: 7px;

    width: 100px;
  }
`;

export const DesktopHeader = styled.header`
  box-shadow: 0 2px 5px grey;
  .top {
    padding: 0 0 0 15px;

    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .menus {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .cart {
        background-color: var(--primary);
        padding: 10px 10px;
        margin-left: 5px;
      }
      svg {
        padding: 0 5px;
      }
    }
  }

  .bottom {
    padding: 0 10px;
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    a {
      padding: 18px 0;
      margin: 0 18px;
      text-decoration: none;
      color: black;
      :focus {
        color: var(--primary);
        border-bottom: 3px solid var(--primary);
      }
    }
    .search {
      display: flex;
      flex-direction: row;
    }
  }

  img {
    width: 100px;
    padding: 0px;
  }
`;

export const ExpandedNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--background);
  a {
    text-decoration: none;
    color: var(--darkText);
    padding: 15px 0;
  }
`;

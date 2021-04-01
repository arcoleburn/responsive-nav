import styled from 'styled-components';
import img from '../Images/hero.jpg'

export const HomeWrapper = styled.div`
.hero{
  background-image: url(${img});
  height: 25vh;
  background-size: 80vw;

  h2,p{
    color: white;
    padding: 5px 15px;
    margin: 0;
  }
}

`
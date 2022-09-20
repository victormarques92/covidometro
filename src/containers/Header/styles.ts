import styled from 'styled-components';

export const Section = styled.div`
  background-color: #fff;
  padding-top: 32px;
  padding-bottom: 12px;
  box-shadow: 0 -17px 50px 0px rgb(153 153 153 / 52%);
  width: 100%;

  @media (max-width: 910px) {
    height: 45%;
    left: -10%;
    top: -32%;
    width: 100%;
  }

  img {
    max-width: 100%;
  }
`;

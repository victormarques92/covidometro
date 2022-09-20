import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin-inline: auto;
  max-width: 1012px;
  padding-inline: 32px;
  padding-bottom: 60px;
  width: 100%;

  @media (min-width: 910px) {
    margin-top: -100px;
  }
`;

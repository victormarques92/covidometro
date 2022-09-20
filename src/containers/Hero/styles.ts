import styled from 'styled-components';
import { Container as ContainerGrid } from '../../styles/Grid';
import theme from '../../theme';

export const Container = styled(ContainerGrid)`
  display: flex;
  gap: 20px;
  padding-top: 48px;

  @media (max-width: 910px) {
    width: 100%;
    flex-direction: column-reverse;
    padding: 24px;
  }

  img {
    max-width: 513px;
    max-height: 486px;
    width: 100%;

    @media (max-width: 910px) {
      margin-inline: auto;
    }
  }
`;

export const Content = styled.div`
  padding-top: 100px;
  width: 100%;

  @media (max-width: 1100px) {
    padding-top: 40px;
    text-align: center;
  }

  h1,
  p {
    max-width: 660px;
    width: 100%;
  }

  h1 {
    ${theme.typography.heading[3]}

    @media (max-width: 320px) {
      font-size: 40px;
    }
  }
`;

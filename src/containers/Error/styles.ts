import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 100px;
  height: 100vh;
  justify-content: center;
  padding: 32px;
  text-align: center;
  width: 100%;

  h1 {
    ${theme.typography.heading[3]}
  }

  img {
    max-width: 100%;
  }

  button {
    background-color: transparent;
    border: 1px solid ${theme.colors.primary};
    border-radius: 8px;
    color: ${theme.colors.primary};
    padding: 12px 24px;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }
`;

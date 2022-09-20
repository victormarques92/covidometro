import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey[1]};
  border-radius: 8px;
  max-width: 948px;
  padding-bottom: 20px;
  padding-inline: 11%;
  padding-top: 32px;
  text-align: center;
  width: 100%;

  h1 {
    ${theme.typography.heading[4]}
    word-break: break-all;
  }

  h2 {
    ${theme.typography.heading[2]}
    margin-bottom: 20px;
  }

  & + & {
    margin-top: 20px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 910px) {
    flex-direction: column;
  }
`;

export const Infos = styled.div`
  margin-top: 20px;
  margin-bottom: 24px;

  :nth-child(2) {
    border-left: 1px solid ${theme.colors.grey[1]};
    border-right: 1px solid ${theme.colors.grey[1]};
    min-width: 350px;

    @media (max-width: 910px) {
      border-left: none;
      border-right: none;
      min-width: auto;
      align-items: center;
    }
  }

  h6 {
    color: ${theme.colors.primary};
    margin-top: 12px;
    ${theme.typography.heading[2]}
  }
`;

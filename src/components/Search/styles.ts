import styled from 'styled-components';
import theme from '../../theme';

export const BoxFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  border-bottom: 2px solid ${theme.colors.primary};

  @media (max-width: 910px) {
    height: 45%;
    width: 100%;
  }

  svg {
    font-size: 22px;
    min-width: 22px;
    color: ${theme.colors.primary};
  }

  input {
    background-color: transparent;
    overflow: hidden;
    flex: 1;
    padding-block: 8px;
    ${theme.typography.body[1]}
  }
`;

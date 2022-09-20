import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import theme from '../../theme';

export const Container = styled.div<SpaceProps>`
  max-width: 948px;
  width: 100%;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey[1]};
  border-radius: 8px;
  padding-inline: 12%;
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  ${space}

  h2 {
    ${theme.typography.heading[2]}
    margin-bottom: 20px;
  }
`;

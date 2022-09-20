import styled from 'styled-components';
import theme from '../../theme';

export const BoxCountry = styled.div`
  max-width: 860px;
  width: 100%;
  height: 150px;
  border-radius: 6px;
  background-color: red;
  margin-left: 100px;
  position: absolute;
  top: 60%;

  h2 {
    ${theme.typography.heading[2]}
    text-align: center;
    padding-top: 24px;
  }

  input {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 50%;
  }
`;

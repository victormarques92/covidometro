import React from 'react';
import { RiseLoader } from 'react-spinners';
import theme from '../../theme';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <RiseLoader color={theme.colors.primary} size={32} />
    </Container>
  );
};

export default Loading;

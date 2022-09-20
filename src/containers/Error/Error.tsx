import React from 'react';
import { warning } from '../../assets';
import { Container } from './styles';

const Error: React.FC = () => {
  return (
    <Container>
      <h1>Ops... erro ao carregar</h1>
      <img src={warning} alt="Warning" />

      <button
        type="button"
        onClick={() => window.location.reload()}
      >
        Tentar novamente
      </button>
    </Container>
  );
};

export default Error;

import React from 'react';
import { doctors } from '../../assets';
import { Container, Content } from './styles';

const Hero: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Conheça o Covidômetro</h1>
        <p>
          Fique atualizado com velocidade e transparência . O
          Covidômetro é uma ferramenta que mostra para você em
          tempo real o número de casos e óbitos relacionados a
          pandemia da COVID - 19 ao redor do mundo.
        </p>
      </Content>

      <img src={doctors} alt="Covidômetro" />
    </Container>
  );
};

export default Hero;

import React from 'react';
import { Container } from '../../styles/Grid';
import { logo } from '../../assets';
import { Section } from './styles';

const Header: React.FC = () => {
  return (
    <Section>
      <Container>
        <img src={logo} alt="Covidômetro" />
      </Container>
    </Section>
  );
};

export default Header;

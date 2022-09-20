import React from 'react';
import { BoxCountry } from './styles';

const CardCountry: React.FC = () => {
  return (
    <BoxCountry>
      <h2>África do Sul</h2>

      <input type="text" value="Digite o nome do país" />
    </BoxCountry>
  );
};

export default CardCountry;

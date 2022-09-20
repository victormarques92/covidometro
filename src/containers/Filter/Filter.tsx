import React, { useState } from 'react';
import { SpaceProps } from 'styled-system';
import { Search } from '../../components';
import { Container } from './styles';

type FilterProps = SpaceProps & {
  onChange: (value: string) => void;
};

const Filter: React.FC<FilterProps> = ({ mb, mt, onChange }) => {
  const [filter, setFilter] = useState('');

  const handle = (value: string) => {
    setFilter(value);
    onChange(value);
  };

  return (
    <Container mt={mt} mb={mb}>
      <h2>Filtrar dados sobre um país</h2>

      <Search
        placeholder="Digite o nome do país"
        value={filter}
        onChange={handle}
      />
    </Container>
  );
};

export default Filter;

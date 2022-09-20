import React from 'react';
import { customNumber } from '../../helpers';
import fatalities from '../../helpers/fatalities';
import { Container, Infos, Cards } from './styles';

interface CountriesProps {
  title: string;
  cases: number;
  deaths: number;
}

const Countries: React.FC<CountriesProps> = ({
  title,
  cases,
  deaths,
}) => {
  return (
    <Container>
      <h1>{title}</h1>

      <Cards>
        <Infos>
          <p>Total de casos</p>
          <h6>{customNumber(cases)}</h6>
        </Infos>

        <Infos>
          <p>Mortes</p>
          <h6>{customNumber(deaths)}</h6>
        </Infos>

        <Infos>
          <p>Fatalidade</p>
          <h6>
            {fatalities({
              deaths,
              cases,
            })}
            %
          </h6>
        </Infos>
      </Cards>
    </Container>
  );
};

export default Countries;

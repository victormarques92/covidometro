import React, { useCallback, useEffect, useState } from 'react';
import { Summary } from '../../@types';
import { Loading } from '../../components';
import {
  Countries,
  Error,
  Filter,
  Header,
  Hero,
} from '../../containers';
import { api } from '../../services/api';
import { Container } from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<Summary[]>();
  const [isError, setIsError] = useState(false);
  const [filter, setFilter] = useState('');

  const getSummary = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get('summary');

      setSummary(response.data.Countries);
    } catch (e) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getSummary();
  }, [getSummary]);

  if (loading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  const data =
    filter !== ''
      ? summary?.filter(obj =>
          obj.Country.toLowerCase().includes(
            filter.toLowerCase(),
          ),
        )
      : summary;

  return (
    <>
      <Header />
      <Hero />

      <Container>
        <Filter mb={32} onChange={setFilter} />

        {data?.map((country: Summary) => (
          <Countries
            title={country.Country}
            cases={country.TotalConfirmed}
            deaths={country.TotalDeaths}
          />
        ))}
      </Container>
    </>
  );
};

export default Home;

interface FatalitiesProps {
  deaths: number;
  cases: number;
}

const fatalities = ({ deaths, cases }: FatalitiesProps) => {
  const result = (deaths * 100) / cases;

  return result.toFixed(2);
};

export default fatalities;

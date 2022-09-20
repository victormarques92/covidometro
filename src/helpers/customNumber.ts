const customNumber = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    maximumSignificantDigits: 3,
  }).format(value);

export default customNumber;

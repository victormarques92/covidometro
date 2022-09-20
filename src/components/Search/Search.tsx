import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BoxFilter } from './styles';

interface SearchProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <BoxFilter>
      <FiSearch />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </BoxFilter>
  );
};

export default Search;

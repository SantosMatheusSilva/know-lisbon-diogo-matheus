import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoIosSearch } from "react-icons/io";
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div>
      <InputGroup size="md" mt={4}>
        <InputLeftElement pointerEvents="none">
        <IoIosSearch />
        </InputLeftElement>
        <Input
          variant="filled"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          bg="green.100"
          _placeholder={{ color: 'gray.500' }}
          _focus={{ borderColor: 'blue.500', boxShadow: 'outline' }}
        />
      </InputGroup>
    </div>
  );
}
export default SearchBar;









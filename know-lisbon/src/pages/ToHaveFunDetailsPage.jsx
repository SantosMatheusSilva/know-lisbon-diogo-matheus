import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ButtonRemove from '../components/ButtonRemove';
import ButtonEdit from '../components/ButtonEdit';
import { Link } from 'react-router-dom';
import { Box, Image, Badge, Button} from '@chakra-ui/react';
export default function ToKnowTheCityDetailsPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    axios.get('https://project-json-server-diogo-matheus.onrender.com/data')
      .then(res => {
        const filtered = res.data.filter(item => ["restaurant", "bar", "club"].includes(item.type));
        setData(filtered);
        setFilteredData(filtered);
      })
      .catch(err => console.log(err));
  }, []);
  const filterData = (searchTerm) => {
    if (searchTerm === '') {
      return data.filter(item => ["restaurant", "bar", "club"].includes(item.type));
    }
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm) ||
      item.address.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    ).filter(item => ["restaurant", "bar", "club"].includes(item.type));
  };
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setFilteredData(filterData(searchTerm));
  };
  const handleRemove = (itemToRemove) => {
    const updatedData = data.filter(item => item.id !== itemToRemove.id);
    setData(updatedData);
    setFilteredData(filterData(searchTerm)); // Move this line to a useEffect
  };
  const handleEdit = (updatedItem) => {
    const updatedData = data.map(item => (item.id === updatedItem.id ? updatedItem : item));
    setData(updatedData);
    setFilteredData(filterData(searchTerm)); // Move this line to a useEffect
  };
  useEffect(() => {
    setFilteredData(filterData(searchTerm));
  }, [data, searchTerm]);
  return (
    <div>
  <SearchBar onSearch={handleSearch} />
  {filteredData.map((item) => {
    return (
      <Box key={item.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' mt="50px" position="relative">
        <Image h="auto" w="100%" objectFit="cover" src={item.image} />
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {item.type}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {item.name}
            </Box>
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {item.address}
          </Box>
          <Link to={`/place-detail-page/${item.id}`}>
            <Button colorScheme='teal' size='sm' bottom="5px" right="5px" ml="-250px" mt="15px">
              Review
            </Button>
          </Link>
          <Box position="static" bottom="5px" right="5px" display="flex" flexDirection="column">
            <Box mb="2">
            </Box>
            <ButtonEdit mt="-10px" currentItem={item} onEdit={handleEdit} />
            <ButtonRemove currentItem={item} onRemove={handleRemove} />
          </Box>
        </Box>
      </Box>
    );
  })}
</div>
  );
}





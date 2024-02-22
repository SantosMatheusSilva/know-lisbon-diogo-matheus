import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ButtonRemove from '../components/ButtonRemove';
import ButtonEdit from '../components/ButtonEdit';
import { Link } from 'react-router-dom';
import './KnowTheCityDetailsPage.css';
import { Box, Image, Badge, Button} from '@chakra-ui/react';

export default function ToKnowTheCityDetailsPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://project-json-server-diogo-matheus.onrender.com/data')
      .then(res => {
        const filtered = res.data.filter(item => ["museum", "monument", "other"].includes(item.type));
        setData(filtered);
        setFilteredData(filtered);
      })
      .catch(err => console.log(err));
  }, []);

  const filterData = (searchTerm) => {
    if (searchTerm === '') {
      return data.filter(item => ["museum", "monument", "other"].includes(item.type));
    } 
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm) ||
      item.address.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    ).filter(item => ["museum", "monument", "other"].includes(item.type));
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setFilteredData(filterData(searchTerm));
  };

  const handleRemove = (itemToRemove) => {
    const updatedData = data.filter(item => item.id !== itemToRemove.id);
    setData(updatedData);
    setFilteredData(filterData(searchTerm));
  };

  const handleEdit = (updatedItem) => {
    const updatedData = data.map(item => (item.id === updatedItem.id ? updatedItem : item));
    setData(updatedData);
    setFilteredData(filterData(searchTerm));
  };

  return (
    <div>
    {/*   <SearchBar onSearch={handleSearch} />
      {filteredData.map(item => (
        <div key={item.id} className='ToKnowTheCityDetails'>
          <img src={item.image} alt="PlaceImage" />
          <Link to={`/place-detail-page/${item.id}`}><h2>{item.name}</h2></Link>
          <p>{item.address}</p>
          <ButtonRemove currentItem={item} onRemove={handleRemove} />
          <ButtonEdit currentItem={item} onEdit={handleEdit} />
        </div>
      ))} */}
      <SearchBar onSearch={handleSearch} /> 
     {
      filteredData.map((item) =>{
        return (
          <Box  key={item.id} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' mt="50px">
      <Image src={item.image} />

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
        <Link to={`/place-detail-page/${item.id}`}><Button colorScheme='teal' size='sm'>
    Review
  </Button>
</Link>
        <Box display="flex" flexDirection="column" maxW="50px" ml="20px">
        <ButtonRemove currentItem={item} onRemove={handleRemove} />
          <ButtonEdit currentItem={item} onEdit={handleEdit} />
          </Box>
      </Box>
    </Box>
        );
      })
     }

    </div>
  );
}

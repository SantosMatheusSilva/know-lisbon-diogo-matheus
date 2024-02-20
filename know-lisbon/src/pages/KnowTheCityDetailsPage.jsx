import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ButtonRemove from '../components/ButtonRemove';

export default function ToKnowTheCityDetailsPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(res => {
        setData(res.data);
        setFilteredData(res.data.filter(item => item.type === "museum" || item.type === "monument" || item.type === "other"));
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setFilteredData(data.filter(item => item.type === "museum" || item.type === "monument" || item.type === "other"));
    } else {
      const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.type.toLowerCase().includes(searchTerm) ||
        item.address.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      ).filter(item => item.type === "museum" || item.type === "monument" || item.type === "other");
      setFilteredData(filteredData);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {
        filteredData && filteredData.map(item=> {
            return (
                <div key={item.id}>
                    <p>{item.image}</p>
                    <h2>{item.name}</h2>
                    <p>{item.address}</p>
                    <p>{item.description}</p>   
                    <ButtonRemove currentItem={item}/>    
                </div>
            )
        })
      }
    </div>
  );
}
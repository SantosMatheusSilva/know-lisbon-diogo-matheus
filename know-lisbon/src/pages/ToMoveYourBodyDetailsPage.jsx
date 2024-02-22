import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ButtonRemove from '../components/ButtonRemove';
import ButtonEdit from '../components/ButtonEdit';
import { Link } from 'react-router-dom';

export default function ToKnowTheCityDetailsPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://project-json-server-diogo-matheus.onrender.com/data')
      .then(res => {
        const filtered = res.data.filter(item => ["outdoor activity", "fitness/wellness"].includes(item.type));
        setData(filtered);
        setFilteredData(filtered);
      })
      .catch(err => console.log(err));
  }, []);

  const filterData = (searchTerm) => {
    if (searchTerm === '') {
      return data.filter(item => ["outdoor activity", "fitness/wellness"].includes(item.type));
    } 
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm) ||
      item.address.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    ).filter(item => ["outdoor activity", "fitness/wellness"].includes(item.type));
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
      <SearchBar onSearch={handleSearch} />
      {filteredData.map(item => (
        <div key={item.id}>
          <p>{item.image}</p>
          <Link to={`/place-detail-page/${item.id}`}><h2>{item.name}</h2></Link>
          <p>{item.address}</p>
          <ButtonRemove currentItem={item} onRemove={handleRemove} />
          <ButtonEdit currentItem={item} onEdit={handleEdit} />
        </div>
      ))}
    </div>
  );
}

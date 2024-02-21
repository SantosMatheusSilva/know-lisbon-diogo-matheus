import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ButtonRemove.css";

export default function ButtonRemove({ currentItem, onRemove }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/data")
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  function deletePlace(item) {
    const updatedData = data.filter(current => current.id !== item.id);
    setData(updatedData);
    onRemove(updatedData);
  }
    

  return (
    <button className="Remove" onClick={() => deletePlace(currentItem)}>Remove</button>
  );
}
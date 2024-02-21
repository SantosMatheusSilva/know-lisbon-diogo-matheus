import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function ButtonEdit({ currentItem, onEdit, setFilteredData }) {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/data")
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  function toggleEditing() {
    setEditing(!editing);
  }

  function handleSave(event, name, type, address, description) {
    event.preventDefault();
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === currentItem.id) {
          return {
            ...item,
            name: name,
            type: type,
            address: address,
            description: description
          };
        } 
        else {
          return item;
        }
      });
    });
  
    setEditing(false);
  }

  return (
    <>
      {
        editing ? (
            <form onSubmit={(event) => handleSave(
                event,
                event.target.name.value,
                event.target.type.value,
                event.target.address.value,
                event.target.description.value
              )}>
              
            <input type="text" name="name" defaultValue={currentItem.name} />
            <input type="text" name="type" defaultValue={currentItem.type} />
            <input type="text" name="address" defaultValue={currentItem.address} />
            <input type="text" name="description" defaultValue={currentItem.description} />
            <button type="submit">Save</button>
            <button onClick={toggleEditing}>Cancel</button>
          </form>
        ) : (
          <button onClick={toggleEditing}>Edit</button>
        )
      }
    </>
  );
}
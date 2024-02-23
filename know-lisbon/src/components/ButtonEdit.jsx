import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { Stack, Input, IconButton } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
export default function ButtonEdit({ currentItem, onEdit, setFilteredData }) {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    axios.get("https://project-json-server-diogo-matheus.onrender.com/data")
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);
  function toggleEditing() {
    setEditing(!editing);
  }
    function handleSave(event, name , address, description) {
      event.preventDefault();
      const updatedItem = {
        ...currentItem,
        name: name,
        address: address,
        description: description
      };
      onEdit(updatedItem);
      setEditing(false);
    }
  return (
    <>
      {
        editing ? (
            <form onSubmit={(event) => handleSave(
                event,
                event.target.name.value,
                event.target.address.value,
                event.target.description.value
              )}>
              <Stack spacing={3}>
            <Input placeholder='extra small size' size='xs' bg="green.100" variant="filled" type="text" name="name" defaultValue={currentItem.name} />
            <Input placeholder='extra small size' size='xs'bg="green.100" variant="filled" type="text" name="address" defaultValue={currentItem.address} />
            <Input placeholder='extra small size' size='xs' bg="green.100" variant="filled" type="text" name="description" defaultValue={currentItem.description} />
            </Stack>
            <IconButton type="submit" variant='solid' colorScheme='teal' aria-label='Done' fontSize='20px' size='sm' mt="10px" mr="10px" isRound={true} icon={<FaCheck />} ml="auto" >Save</IconButton>
            <IconButton type="submit" variant='solid' colorScheme='red' aria-label='Done' fontSize='25px' size='sm' mt="10px" isRound={true} icon={<RxCross2 />} ml="auto" onClick={toggleEditing}>Cancel</IconButton>
          </form>
        ) : (
          <Button colorScheme='green' size='sm' ml="auto" mr="0.2" mt="-45px" w="67px" onClick={toggleEditing}>Edit</Button>
        )
      }
    </>
  );
}
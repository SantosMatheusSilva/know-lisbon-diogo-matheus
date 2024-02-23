import React from "react";
import "./ButtonRemove.css";
import { Button } from "@chakra-ui/react";
export default function ButtonRemove({ currentItem, onRemove }) {
  function deletePlace() {
    onRemove(currentItem);
  }
  return (
    <Button colorScheme='teal' size='sm' mt="4px" ml="auto" onClick={deletePlace}>Delete</Button>
  );
}






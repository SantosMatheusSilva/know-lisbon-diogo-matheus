import React from "react";
import "./ButtonRemove.css";

export default function ButtonRemove({ currentItem, onRemove }) {

  function deletePlace() {
    onRemove(currentItem);
  }

  return (
    <button className="Remove" onClick={deletePlace}>Remove</button>
  );
}

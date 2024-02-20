    import { useState } from "react"
    import React from "react"
    import axios from "axios";
    import "./ButtonRemove.css"
    import { useEffect } from "react";

    export default function ButtonRemove ({ currentItem }) {
        const [data, setData] = useState([])

        useEffect(() => {
            axios.get("http://localhost:5000/data")
            .then(res => setData(res.data))
            .catch(err => console.log(err)) 
        }, [])

        function deletePlace (item) {
            let filterList = data.filter((currentItem) => {
                return currentItem.id !== item.id
            })
            setData(filterList);
        }

        return (
            <div>
            <button className="Remove" onClick={() => deletePlace(currentItem)}>Remove</button>
            </div>
        )
    }
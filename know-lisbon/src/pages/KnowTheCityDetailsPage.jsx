import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchBar from "../components/SearchBar"

export default function ToKnowTheCityDetailsPage () {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/data")
        .then(res => setData(res.data))
        .catch(err => console.log(err)) 
    }, [])

        const filteredData = data.filter(item => item.type === "museum" || item.type === "monument" || item.type === "other")
    

    return (
        <div>
            <SearchBar />
            {
                filteredData && filteredData.map(item=> {
                    return (
                        <div key={item.id}>
                            <p>{item.image}</p>
                            <h2>{item.name}</h2>
                            <p>{item.address}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
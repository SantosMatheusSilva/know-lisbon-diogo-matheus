import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import AddReview from "../components/AddReview";
export default function PlaceDetailPage () {
    const [place, setPlace] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://project-json-server-diogo-matheus.onrender.com/data/${id}`)
        .then(res => setPlace(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <article key= {place.id}>
                <div>
                <h1>{place.name}</h1>
                <div style={{width: "500px", height: "300px"}}>
                <img src={place.image} alt={place.name} style={{width: "500px", height: "300px"}} />
                </div>
                <h3>{place.type}</h3>
                <p>{place.address}</p>
                <p>{place.description}</p>
                </div>
            </article>
            <article>
                <AddReview id={id} setPlace={setPlace} place={place}/>
            </article>
        </div>
    )
}
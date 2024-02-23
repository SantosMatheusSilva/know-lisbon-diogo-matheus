import axios from "axios";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";



const customIcon = new Icon ({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [38, 38],
  });
  

export default function Map(props) {

    const [data, setData] = useState([]);
    const [geolocation, setGeolocation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = props;
    
     useEffect(() => {
        axios
        .get(`https://project-json-server-diogo-matheus.onrender.com/data/${id}`)
        .then((res) => {
          setData(res.data);
          setGeolocation(res.data.geolocation);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      }, [id]);  
     
      if (isLoading) {
        return <p>Loading...</p>;
      }
      console.log(geolocation);
      console.log(data)
      // [51.505, -0.09];
      const markerPosition = geolocation;  

    return (
        <MapContainer
            center={markerPosition}
            zoom={17}
            style={{ height: "500px", width: "700px" }}>

            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerPosition && (
            <Marker position={markerPosition} icon={customIcon}>
            </Marker>
            )}

        </MapContainer>
    );
}
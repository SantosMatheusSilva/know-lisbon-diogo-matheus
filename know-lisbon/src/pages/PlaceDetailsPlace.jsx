import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import AddReview from "../components/AddReview";
import { Box, Image, Badge, Button, Text} from '@chakra-ui/react';
import Map from "../components/Map";
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
      <Box maxW='500px' borderWidth='1px' borderRadius='lg' overflow='hidden' mt="50px">
        <Image borderRadius="5px" src={place.image} />
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal' fontSize="20px">
              {place.name}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              mr='0'
              ml="auto"
              mb="10"
            >
              {place.type}
            </Box>
          </Box>
        <Box
          mt='1'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          <Text noOfLines={10} fontSize="20px" textAlign="left" as="b" mr>{place.description}</Text>
        </Box>
        <Box  fontSize="15px" mt="15px">
          {place.address}
        </Box>
        <Box  fontSize="17px" mt="20px" textAlign="center">
        {place.opening_hours}
        </Box>
        <Box  fontSize="17px" mt="2px" textAlign="center">
        Average Price: <b>{place.average_price_euros}</b>
        <Box fontSize="12px" mt="10px" textAlign="center">
        <a href={place.website}>Check the Website</a>
        </Box>
        </Box>
      </Box>
      <Map id={id}/>
      <Box mt="k+50px">
      <AddReview id={id} setPlace={setPlace} place={place}/>
      </Box>
    </Box>
        </div>
    )
}
import { Link } from 'react-router-dom';
import {Image, Flex, Button, HStack, chakra, Text} from "@chakra-ui/react";
import { GiSmallFishingSailboat } from "react-icons/gi";



export default function NavBar (){
    return (
        <chakra.header id="header" bg="#C6F6D5" width="100%" height="auto" marginTop="0" marginBottom="100px" padding="0">
            <Flex w="100%"
                    px="6"
                    py="5"
                    align="center"
                    justify="space-between">
                       <HStack>
                       <GiSmallFishingSailboat style={{height: "50px", width: "50px"}}/>
                        <Text fontSize="3xl" fontWeight="bold" >
                            Caravela
                        </Text> 
                       </HStack>
                        <HStack as="nav"spacing="3">
                            <Link to={"/"}>
                                <Text fontWeight="bold">Home</Text>
                            </Link>
                            {/* <Link to={"/places-to-know"}>To know the city</Link>
                            <Link to={"/places-to-have"}>To have fun </Link>
                            <Link to={"/places-to-move"}>To move your body</Link> */}
                        </HStack>
                    </Flex>
        </chakra.header>
            
    );
}



/* 
<div>
            <Link to={"/"}></Link>
            <h2>Caravela</h2>
            {/* <h1>To know Lisbon</h1> */

 
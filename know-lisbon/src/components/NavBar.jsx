import { Link } from 'react-router-dom';
import {Image, Flex, Button, HStack, chakra, Text} from "@chakra-ui/react";
import { GiSmallFishingSailboat } from "react-icons/gi";
export default function NavBar (){
    return (
        <chakra.header id="header"width="100%" height="auto" marginTop="0" marginBottom="100px" padding="0">
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
                        </HStack>
                    </Flex>
        </chakra.header>
    );
}
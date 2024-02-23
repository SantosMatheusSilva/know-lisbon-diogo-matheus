import { Link as ChakraLink, Center } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import {Box, Text} from '@chakra-ui/react';
export default function ErrorPage() {
  return (
    <Center h="100vh">
      <div>
        <h1>Page Not Found</h1>
        <Box mt="50px" display="flex" justifyContent="center">
          <ChakraLink as={RouterLink} to='/'>
            <Text display="right">Home</Text>
            <IoHome size={50} display="center"/>
          </ChakraLink>
        </Box>
      </div>
    </Center>
  );
}




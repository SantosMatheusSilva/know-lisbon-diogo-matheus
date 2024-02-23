import {Image, Flex, Button, Box, chakra} from "@chakra-ui/react";
import { VscGithub } from "react-icons/vsc";

export default function Footer(){
    return (

        <chakra.footer bg="#C6F6D5">
           <Box alignItems="center">
          
            <a href="https://github.com/DiogoCoelho98/know-lisbon-diogo-matheus"> <VscGithub /> Find Our Project</a>
            <p>© 2024 App Name - Todos os direitos reservados.</p>
           </Box>
            
        </chakra.footer>

       /*  <footer>
            <p>© 2024 App Name - Todos os direitos reservados.</p>
            <a href="https://github.com/DiogoCoelho98/know-lisbon-diogo-matheus">Find Our Project</a>
        </footer> */
    )
}
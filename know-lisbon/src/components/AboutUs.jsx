import './AboutUs.css'
import {Box, Center, Text} from '@chakra-ui/react'
export default function AboutUs () {
    return (
        <Box className='AboutUs'>
            <Box>
            <Center p="5" fontSize="50" fontWeight="bold">About Caravela</Center>
                <Text p="5" >Caravela serves as your ultimate guide to discover the best spots in Lisbon, offering a meticulously compiled list of diverse attractions waiting to be explored. Whether you're seeking the city's most iconic landmarks or hidden gems off the beaten path, our app ensures you effortlessly must-visit destinations. From captivating museums to vibrant nightclubs, there's something to suit every preference and taste, making your Lisbon experience truly <b>unforgettable</b>.
                </Text>
                <Text p="5px" display="flex" justifyContent="left" ml="18px" fontSize="30px">Team</Text>
                <Text p="5px" display="flex" justifyContent="left" ml="35px" fontSize="16px"> Diogo Coelho - Web Developer <a style={{color:"blue", marginLeft:"10px"}} href="https://github.com/DiogoCoelho98">GitHub</a> <a style={{color:"blue", marginLeft:"10px"}} href="https://www.linkedin.com/in/diogo-coelho-9360a9268/">LinkedIn</a></Text >
                <Text p="5px" display="flex" justifyContent="left" ml="35px" fontSize="16px">Matheus Santos - Web Developer <a style={{color:"blue", marginLeft:"10px"}} href="https://github.com/SantosMatheusSilva">GitHub</a> <a style={{color:"blue", marginLeft:"10px"}} href="https://www.linkedin.com/in/math-s-santos/">LinkedIn</a></Text>
            </Box>
        </Box>
    )
}
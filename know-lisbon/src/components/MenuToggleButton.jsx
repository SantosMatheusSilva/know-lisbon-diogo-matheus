import React from "react";  
import { Box, Stack } from "@chakra-ui/react";
import {MenuToggle} from "@chakra-ui/react";


export default function MenuToggleButton({toggle, isOpen}) {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    )
}

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (

        <MenuToggle isOpen={isOpen} toggle={toggle} />
    )
}

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
       
    )
}




import { Flex, Link } from "@chakra-ui/react"

const Footer = () => {
    return(
        <Flex bgColor="teal.200"  p="5" display="flex" flexDirection="row" justifyContent="center" as="footer">
            <Link href="https://www.google.com" target="_blank" mx="5" fontWeight="bold" >Insta</Link>
            <Link mx="5" fontWeight="bold" >Facebook</Link>
            <Link mx="5" fontWeight="bold" >Linked In</Link>

        </Flex>
    )
}

export default Footer
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <Flex bgColor="teal.200" p="4" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
      <Heading as="h2">Ansari AbdusSaboor</Heading>
      <Box p="4" >
       <NavLinks />
      

      </Box>
    </Flex>
  );
};

export default Header;

import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const NavLinks = () => {
  return (
    <Flex display="flex" flexDirection="row" gap="4" mx="2">
      <Link _hover={{ color: "white" }} fontWeight="bold" color="teal.800">
        Skills
      </Link>
      <Link _hover={{ color: "white" }} fontWeight="bold" color="teal.800">
        Projects
      </Link>
      <Link _hover={{ color: "white" }} fontWeight="bold" color="teal.800">
        Education
      </Link>
      <Link _hover={{ color: "white" }} fontWeight="bold" color="teal.800">
        About
      </Link>
    </Flex>
  );
};

export default NavLinks;

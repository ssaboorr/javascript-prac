import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { Card1, Card2, Card3 } from "./EduCard";

const Education = () => {
  return (
    <Flex m="5" flexDirection="column">
      <Flex>
        <Heading as="h2">About Me</Heading>
      </Flex>

      <Flex
        display="flex"
        flexDirection="row"
        wrap="wrap"
        justifyContent="center"
        gap="5"
        p="5"
      >
        <Card1 />
        <Card2 />
        <Card3 />
      </Flex>
    </Flex>
  );
};

export default Education;

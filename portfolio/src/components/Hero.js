import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      display="flex"
      flexDirection="row"
      justifyContent="center"
      wrap="wrap"
      gap="4"
      p="5"
      m="5"
    >
      <Box>
        <Image
          width="400px"
          height="250px"
          minH="360px"
          objectFit="cover"
          src="/images/coder.jpg"
        />
      </Box>
      <Box p="5" display="flex" flexDirection="column" justifyContent="center">
        <Text fontWeight="bold" fontSize="2xl" color="teal.800">
          Hi, My name is Ansari Abdus Saboor ,
        </Text>
        <Text fontWeight="bold" fontSize="2xl" color="teal.200">
          Full Stack Web Developer
        </Text>
      </Box>
    </Flex>
  );
};
export default Hero;

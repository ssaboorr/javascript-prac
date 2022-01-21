import { Box, Divider, Flex, Heading, Progress, Text } from "@chakra-ui/react";

export const Card1 = () => {
  return (
    <Box
      bgColor="white"
      border="1px solid black"
      p="5"
      borderRadius="5px"
      boxShadow="2xl"
    >
      <Heading as="h4">Education:</Heading>
      <Text fontSize="2xl">
        Bachelor of Engineering (B.E), Computer Science & Engineering
      </Text>
      <Text fontSize="xl">Anjuman Islam Kalsekar Technical Campus </Text>
      <Text>2017 - 2021</Text>
      <Divider />
      <Text fontSize="2xl">Senior Secondary (XII)</Text>
      <Text fontSize="xl">Wilson College,HSC board</Text>
      <Text>Year of completion: 2017</Text>
      <Divider bgColor="black" />
      <Text fontSize="2xl">Secondary (X)</Text>
      <Text fontSize="xl">St. Marys High Scool,SSC Board</Text>
      <Text>Year of completion: 2015</Text>
    </Box>
  );
};

export const Card2 = () => {
  return (
    <Box
      bgColor="white"
      border="1px solid black"
      p="5"
      borderRadius="5px"
      boxShadow="2xl"
    >
      <Heading as="h4">Education:</Heading>
      <Text fontSize="2xl">
        Bachelor of Engineering (B.E), Computer Science & Engineering
      </Text>
      <Text fontSize="xl">Anjuman Islam Kalsekar Technical Campus </Text>
      <Text>2017 - 2021</Text>
      <Divider />
      <Text fontSize="2xl">Senior Secondary (XII)</Text>
      <Text fontSize="xl">Wilson College,HSC board</Text>
      <Text>Year of completion: 2017</Text>
      <Divider bgColor="black" />
      <Text fontSize="2xl">Secondary (X)</Text>
      <Text fontSize="xl">St. Marys High Scool,SSC Board</Text>
      <Text>Year of completion: 2015</Text>
    </Box>
  );
};

export const Card3 = () => {
  return (
    <Box
      bgColor="white"
      border="1px solid black"
      p="5"
      borderRadius="5px"
      boxShadow="2xl"
    >
      <Heading width="300px" as="h4">
        Skills:
      </Heading>
      <Box display="flex" flexDirection="column" mb="5" p="4">
        <Heading as="h6" fontSize="xl">
          Javascript
        </Heading>
        <Progress hasStripe value={64} />
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" mb="5" p="4">
        <Heading as="h6" fontSize="xl">
          React js
        </Heading>
        <Progress hasStripe value={80} />
      </Box>
      <Divider bgColor="black" />
      <Box display="flex" flexDirection="column" mb="5" p="4">
        <Heading as="h6" fontSize="xl">
          Node js
        </Heading>
        <Progress hasStripe value={75} />
      </Box>
    </Box>
  );
};

// export default Card;

import { FC } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const Card: FC<{ title: string; image: string; content: string }> = ({
  title,
  image,
  content,
}) => (
  <Flex flexDir="column" w={{ base: "280px", lg: "385px" }}>
    <Box borderBlockEnd="3px solid red">
      <Image src={image} alt="test" />
    </Box>
    <Box textAlign="start" mt="1.5rem">
      <Text color="white" fontSize={{ base: "1rem", lg: "1.25rem" }}>
        {title}
      </Text>

      <Text my="1rem" fontSize={{ base: "14px", lg: "18px" }}>
        {content}
      </Text>
    </Box>
    <Flex textAlign="start">
      <Text
        color="white"
        mt="0.5rem"
        cursor="pointer"
        borderBlockEnd="1px solid red"
        paddingBottom="0.5rem"
        onClick={() => console.log(`clicked ${title}`)}
      >
        READ MORE
      </Text>
    </Flex>
  </Flex>
);

export default Card;

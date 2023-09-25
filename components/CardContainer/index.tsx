import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import Card from "../Card";
import { LATEST_AEG } from "@/utils/mockData";

const CardContainer: FC<{ title: string }> = ({ title }) => (
  <Box
    maxWidth="1200px"
    minW="320px"
    m={{ base: "1rem", lg: "auto" }}
    textAlign="center"
    paddingTop="4rem"
    paddingBottom="14rem"
  >
    <Heading fontSize="2.5rem" color="gray.700" fontWeight={400}>
      {title.toUpperCase()}
    </Heading>

    <Flex mt="4rem" flexDir={{ base: "column", lg: "row" }} gap={6}>
      {LATEST_AEG.map(({ title, image, content }, index) => (
        <Card key={index} title={title} content={content} image={image} />
      ))}
    </Flex>
  </Box>
);

export default CardContainer;

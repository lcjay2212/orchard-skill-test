import { Box, Text, Flex, Image, Divider } from "@chakra-ui/react";
import { FC } from "react";

const SectionOne: FC = () => (
  <Box
    maxWidth="1200px"
    minW="320px"
    // m={{ base: "1rem", lg: "auto" }}
    m="auto"
    my={{ base: "2rem", lg: "12rem" }}
    color="gray.700"
  >
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      gap={{ base: 0, lg: 6 }}
      mx={{ base: "1rem", lg: 0 }}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flex={{ base: "1", lg: "2" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box mr={{ base: 0, lg: "1.5rem" }}>
          <Image
            src="/assets/component-01/Image-01.jpg"
            alt="test"
            w={{ base: "280px", lg: "auto" }}
          />
        </Box>

        <Flex flexDir="column" justifyContent="space-between">
          <Image
            src="/assets/component-01/Image-02.jpg"
            alt="test"
            w={{ base: "280px", lg: "auto" }}
          />
          <Image
            src="/assets/component-01/Image-03.jpg"
            alt="test"
            w={{ base: "280px", lg: "auto" }}
          />
        </Flex>
      </Flex>

      <Flex flex="1" flexDir="column">
        <Text
          fontSize={{ base: "19px", lg: "26px" }}
          mt={{ base: "3rem", lg: 0 }}
          letterSpacing="1px"
        >
          ANSWER YOUR BODY&apos;S NEEDS
        </Text>
        <Divider borderBlockEnd="1.4px solid white" my="1rem" />
        <Text
          fontSize={{ base: "1rem", lg: "18px" }}
          fontWeight={400}
          letterSpacing="1px"
        >
          The way ingredients are sourced affects the way we nourish our bodies.
          Author Mark Schatzer believes our body naturally devolops an appetite
          for the foods and nutrients it needs to be healthy. but that
          artificial flavourings are getting in the way. This cab be reversed by
          focusing on high-quality ingredients and being mindful as your
          appetite guides you to consume according to your body&apos;s needs.
        </Text>

        <Text color="red" mt="3rem">
          BE MINDFUL
        </Text>
        <Text mt="1rem" fontSize={{ base: "1rem", lg: "20px" }} color="white">
          Sourcing local or organic food is a good way to start being more
          mindful about what you&apos;re cooking and eating
        </Text>
      </Flex>
    </Flex>
  </Box>
);

export default SectionOne;

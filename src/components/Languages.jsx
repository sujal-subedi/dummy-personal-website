import React from "react";
import reactJs from "./photos/reactlogo.svg";
// import python from "./photos/pythonlogo.png";
// import sql from "./photos/sqllogologo.png";

import {
  Box,
  chakra,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.300"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function Portfilio() {
  return (
    <>
      <Flex
        direction="column"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={10}
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          shadow="xl"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          px={8}
          py={20}
          mx="auto"
          w="full"
        >
          <Box>
            <chakra.h1
              textAlign={"center"}
              fontSize={"4xl"}
              py={10}
              fontWeight={"bold"}
            >
              Languages
            </chakra.h1>
          </Box>
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                Image
                alt={"Login Image"}
                objectFit={"cover"}
                src={reactJs}
                title={"ReactJs"}
              />
              <Feature
                // Image
                // alt={"Login Image"}
                // objectFit={"cover"}
                // src={python}
                title={"Food Delivery App"}
              />
              <Feature
                // Image
                // alt={"Login Image"}
                // objectFit={"cover"}
                // src={sql}
                title={"SQL"}
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

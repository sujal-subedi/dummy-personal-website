import React from "react";
import reactJs from "../photos/reactlogo.svg";
import python from "../photos/pythonlogo.png";
import sql from "../photos/SQLlogo.png";

import {
  Box,
  chakra,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
  Image,
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
        id="languages"
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
          shadow="2xl"
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
            <SimpleGrid
              shadow="dark-lg"
              columns={{ base: 1, md: 3 }}
              spacing={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              p="10"
            >
              <Box transition={".5s"} _hover={{ transform: "scale(1.1)" }}>
                <Image
                  transition={".5s"}
                  _hover={{ transform: "scale(.9)" }}
                  boxSize="200px"
                  src={reactJs}
                  alt="ReactJs logo"
                  border="1px"
                  borderColor="gray.200"
                ></Image>
                <Text border="1px" mt="3" p="3">
                  ReactJs
                </Text>
              </Box>

              <Box transition={".5s"} _hover={{ transform: "scale(1.1)" }}>
                <Image
                  transition={".5s"}
                  _hover={{ transform: "scale(.9)" }}
                  boxSize="200px"
                  src={python}
                  alt="Python logo"
                  border="1px"
                  borderColor="gray.200"
                ></Image>
                <Text border="1px" mt="3" p="3">
                  Python
                </Text>
              </Box>
              <Box transition={".5s"} _hover={{ transform: "scale(1.1)" }}>
                <Image
                  transition={".5s"}
                  _hover={{ transform: "scale(.9)" }}
                  boxSize="200px"
                  src={sql}
                  alt="SQL Logo"
                  border="1px"
                  borderColor="gray.200"
                ></Image>
                <Text border="1px" mt="3" p="3">
                  SQL
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

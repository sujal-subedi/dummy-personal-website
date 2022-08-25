import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
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
        id="portfolio"
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
        >
          <Box>
            <chakra.h1
              textAlign={"center"}
              fontSize={"4xl"}
              py={10}
              fontWeight={"bold"}
            >
              Portfolio
            </chakra.h1>
          </Box>
          <Box p={4} shadow="dark-lg">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={
                  <Icon as={FaShoppingCart} w={10} h={10} color="blue.400" />
                }
                title={"E-commerce"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
              <Feature
                icon={<Icon as={MdFastfood} w={10} h={10} color="yellow.600" />}
                title={"Food Delivery App"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
              <Feature
                icon={<Icon as={FcTodoList} w={10} h={10} color="blue.400" />}
                title={"Todo App"}
                text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                }
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

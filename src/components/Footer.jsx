import React from "react";
import bmcbutton from "../photos/bmc-button.png";
import { Button, chakra, Flex, Icon, Img, Link, Text } from "@chakra-ui/react";
import { SiBuymeacoffee } from "react-icons/si";
const Footer = () => {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      mt="-10"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{
          base: "column",
          sm: "row",
        }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <chakra.a
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _dark={{
            color: "white",
            _hover: {
              color: "gray.300",
            },
          }}
          _hover={{
            color: "gray.700",
          }}
        >
          Logo
        </chakra.a>

        <chakra.p
          ml="50"
          textAlign="center"
          fontSize="xl"
          py={{
            base: "2",
            sm: "0",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
        >
          All rights reserved
        </chakra.p>

        <Flex mx="-2">
          <Link
            href="https://www.buymeacoffee.com/sujalsubedi"
            target={"blank"}
          >
            <Button
              color="gray.900"
              _dark={{
                color: "white",
                _hover: {
                  color: "white.300",
                },
              }}
            >
              <SiBuymeacoffee size={40} />
              <Text ml={6}>Buy Me A Coffee</Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

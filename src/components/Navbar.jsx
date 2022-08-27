import {
  useColorModeValue,
  useColorMode,
  useDisclosure,
  chakra,
  Button,
  CloseButton,
  VStack,
  IconButton,
  Box,
  HStack,
  VisuallyHidden,
  Flex,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/react";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        position="fixed"
        zIndex="1"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="#"
              title="Choc Home Page"
              display="flex"
              fontSize="xl"
              ml="2"
              fontWeight="bold"
              alignItems="center"
            >
              Logo
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Stack direction={"row"} mt={1} spacing={6}>
                <Link href={"#"}>Home</Link>
                <Link href={"#portfolio"}>Portfolio</Link>
                <Link href={"#services"}>Services</Link>
                <Link href={"#languages"}>Languages</Link>
                <Link href={"#contact"}>Contact</Link>

                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? (
                    <Icon as={MdDarkMode} w={5} h={5} color="black.900" />
                  ) : (
                    <Icon as={MdLightMode} w={5} h={5} color="orange.400" />
                  )}
                </Button>
              </Stack>
            </HStack>

            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link href={"#"}>Home</Link>
                <Link href={"#portfolio"}>Portfolio</Link>
                <Link href={"#services"}>Services</Link>
                <Link href={"#languages"}>Languages</Link>
                <Link href={"#contact"}>Contact</Link>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? (
                    <Icon as={MdDarkMode} w={5} h={5} color="black.900" />
                  ) : (
                    <Icon as={MdLightMode} w={5} h={5} color="orange.400" />
                  )}
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;

import {
  Box,
  Container,
  Stack,
  Button,
  Link,
  Icon,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function SmallWithNavigation() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}

      <Box
        position="fixed"
        width="full"
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <Icon as={MdDarkMode} w={5} h={5} color="black.900" />
            ) : (
              <Icon as={MdLightMode} w={5} h={5} color="orange.400" />
            )}
          </Button>
        </Container>
      </Box>
    </>
  );
}

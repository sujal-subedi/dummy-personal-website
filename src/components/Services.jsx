import React from "react";
import {
  Box,
  chakra,
  SimpleGrid,
  Button,
  ButtonGroup,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";

const Services = () => {
  return (
    <div>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={10}
        w="full"
        justifyContent="center"
        alignItems="center"
        // pos="absolute"
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
        >
          <Box>
            <chakra.h1
              textAlign={"center"}
              fontSize={"4xl"}
              py={10}
              fontWeight={"bold"}
            >
              Services
            </chakra.h1>
          </Box>
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              md: 2,
            }}
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="gray.900"
                _dark={{
                  color: "gray.400",
                }}
                lineHeight={{
                  md: "shorter",
                }}
                textShadow="2px 0 currentcolor"
              >
                Website Development
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "lg",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                fugit provident expedita dolore hic explicabo deleniti
                perspiciatis asperiores impedit, quasi animi ipsam vitae
                blanditiis, delectus totam ducimus tenetur sed tempore ab culpa
                consequatur velit. Tempora, repellat molestiae sapiente dicta
                ducimus nulla delectus recusandae ad, quia, soluta ex cum illum
                provident!
              </chakra.p>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              _dark={{
                bg: "gray.700",
              }}
            ></Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              md: 2,
            }}
            flexDirection="column-reverse"
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              _dark={{
                bg: "gray.700",
              }}
            ></Box>
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="gray.900"
                _dark={{
                  color: "gray.400",
                }}
                lineHeight={{
                  md: "shorter",
                }}
                textShadow="2px 0 currentcolor"
              >
                Maintenance of Existing software
              </chakra.h2>

              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "lg",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                fugit provident expedita dolore hic explicabo deleniti
                perspiciatis asperiores impedit, quasi animi ipsam vitae
                blanditiis, delectus totam ducimus tenetur sed tempore ab culpa
                consequatur velit. Tempora, repellat molestiae sapiente dicta
                ducimus nulla delectus recusandae ad, quia, soluta ex cum illum
                provident!
              </chakra.p>
            </Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              md: 2,
            }}
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="gray.900"
                _dark={{
                  color: "gray.400",
                }}
                lineHeight={{
                  md: "shorter",
                }}
                textShadow="2px 0 currentcolor"
              >
                Web Development Trainaing
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "lg",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                fugit provident expedita dolore hic explicabo deleniti
                perspiciatis asperiores impedit, quasi animi ipsam vitae
                blanditiis, delectus totam ducimus tenetur sed tempore ab culpa
                consequatur velit. Tempora, repellat molestiae sapiente dicta
                ducimus nulla delectus recusandae ad, quia, soluta ex cum illum
                provident!
              </chakra.p>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              _dark={{
                bg: "gray.700",
              }}
            ></Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </div>
  );
};

export default Services;

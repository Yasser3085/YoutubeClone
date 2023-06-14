import React from "react";
import { chakra, Box, Flex, SimpleGrid, Icon, Image } from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";

export default function Getstarted(){
  return (
    <SimpleGrid  columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex bg="brand.400">
        <Image
          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
         h={'1000px'}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color="brand.600"
          _dark={{ color: "gray.300" }}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
         
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="brand.600"
          _dark={{ color: "gray.300" }}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
         Check My Youtube Clone
        </chakra.h1>
  

        <Box display="inline-flex" rounded="md" shadow="md">
          <chakra.a
          href="/home"
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            _light={{ color: "white" }}
            bg="red.600"
            _dark={{ bg: "brand.500" }}
            _hover={{
              bg: "brand.700",
              _dark: { bg: "brand.600" },
            }}
          >
            Get Started
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}


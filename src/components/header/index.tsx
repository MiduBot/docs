import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Image,
  Heading,
  Container,
} from "@chakra-ui/react";
import Mobile from "./mobile";
import { Links } from "./links";
import CustomLink from "@/common/link";

const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box
      as="header"
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
    >
      <Container maxW="90%">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <CustomLink href="/">
            <HStack>
              <Image
                boxSize="35px"
                objectFit="cover"
                src="/images/logo.png"
                alt="midubox"
              />
              <Heading fontSize="16px">midubot</Heading>
            </HStack>
          </CustomLink>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={5}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              {Links.map((link) => (
                <CustomLink
                  key={link.title}
                  href={link.slug}
                  external={link.external}
                >
                  {link.title}
                </CustomLink>
              ))}
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <Mobile />
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

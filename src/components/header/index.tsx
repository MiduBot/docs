import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Image,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
import Mobile from "./mobile";
import Links from "./links";
import CustomLink from "@/common/link";
import ChangeTheme from "@/components/theme";

const Header = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box as="header" position="sticky" top="0" bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} borderBottomWidth="1px" shadow="sm">
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
          <HStack display="flex" alignItems="center" spacing={5}>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <CustomLink
                  key={link.title}
                  title={link.title}
                  href={link.href}
                  external={link.external}
                  icon={link.icon}
                >
                  <Text>{link.title}</Text>
                </CustomLink>
              ))}
            </HStack>
            <ChangeTheme />
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

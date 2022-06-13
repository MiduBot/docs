import CustomLink from "@/common/link";
import {
  CloseButton,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { List } from "phosphor-react";
import Links from "./links";

const Mobile = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <>
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        variant="ghost"
        icon={<List size={22} weight="bold" />}
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
      >
        <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />
        {Links.map((link) => (
          <CustomLink
            key={link.title}
            href={link.href}
            external={link.external}
          >
            {link.title}
          </CustomLink>
        ))}
      </VStack>
    </>
  );
};

export default Mobile;

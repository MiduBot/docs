import { ExplorerProps } from "@/interfaces/explorer";
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ExplorerContent from "./content";

const Index = (props: ExplorerProps) => {
  const sidebar = useDisclosure();
  return (
    <Box as="section" minH="100vh">
      <ExplorerContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <ExplorerContent width="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 80 }} transition=".3s ease">
        <Button
          aria-label="Documents"
          display={{ base: "inline-flex", md: "none" }}
          onClick={sidebar.onOpen}
          w="100%"
        >
          Documents
        </Button>
        <Box as="main" pt="6">{props.children}</Box>
      </Box>
    </Box>
  );
};

export default Index;

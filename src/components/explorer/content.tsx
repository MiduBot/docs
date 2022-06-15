import CustomLink from "@/common/link";
import Guide from "@/data/guide";
import { ExplorerProps } from "@/interfaces/explorer";
import { Box, Flex, Text } from "@chakra-ui/react";
import { File } from "phosphor-react";

const ExplorerContent = (props: ExplorerProps) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex direction="column" as="nav" aria-label="Main Explorer" mt="6">
        {Guide.map((item) => (
          <CustomLink
            key={item.name}
            href={item.slug}
            title={item.name}
            mb={2}
            icon={<File size={16} weight="bold" />}
          >
            <Text>{item.name}</Text>
          </CustomLink>
        ))}
      </Flex>
    </Box>
  );
};

export default ExplorerContent;

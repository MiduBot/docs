import { Box, Code } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Index = (props: Props) => {
  return (
    <Code borderWidth="1px" borderColor="gray.500" borderRadius="5px" p="3">
      {props.children}
    </Code>
  );
};

export default Index;

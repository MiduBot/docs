import {
  Heading,
  ListItem,
  ListProps,
  ListItemProps,
  OrderedList,
  Text,
  TextProps,
  UnorderedList,
} from "@chakra-ui/react";

// Export custom components ->
const components = {
  h1: (props: TextProps) => (
    <Heading mt={6} as="h1" fontSize="5xl">
      {props.children}
    </Heading>
  ),
  h2: (props: TextProps) => (
    <Heading mt={6} as="h2" fontSize="3xl">
      {props.children}
    </Heading>
  ),
  h3: (props: TextProps) => (
    <Heading mt={6} as="h3" fontSize="3xl">
      {props.children}
    </Heading>
  ),
  p: (props: TextProps) => (
    <Text as="p" mt={3} mb={3}>
      {props.children}
    </Text>
  ),
  ol: (props: ListProps) => (
    <OrderedList as="ol" mt={4} mb={4}>
      {props.children}
    </OrderedList>
  ),
  ul: (props: ListProps) => (
    <UnorderedList as="ul" mt={4} mb={4}>
      {props.children}
    </UnorderedList>
  ),
  li: (props: ListItemProps) => <ListItem>{props.children}</ListItem>,
};

export default components;

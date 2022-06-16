import {
  Heading,
  ListItem,
  ListProps,
  ListItemProps,
  OrderedList,
  Text,
  TextProps,
  UnorderedList,
  Link,
  LinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";

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
    <Text as="p" mt={3} mb={3} fontSize="16px">
      {props.children}
    </Text>
  ),
  ol: (props: ListProps) => (
    <OrderedList as="ol" mt={4} mb={4} fontSize="16px">
      {props.children}
    </OrderedList>
  ),
  ul: (props: ListProps) => (
    <UnorderedList as="ul" mt={4} mb={4} fontSize="16px">
      {props.children}
    </UnorderedList>
  ),
  li: (props: ListItemProps) => (
    <ListItem fontSize="16px">{props.children}</ListItem>
  ),
  a: (props: LinkProps) => (
    <Link textDecoration="underline" isExternal>
      {props.children}
    </Link>
  ),
};

export default components;

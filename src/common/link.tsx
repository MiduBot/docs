import React from "react";
import NextLink from "next/link";
import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { LinkProps } from "@/interfaces/link";

const CustomLink = (props: LinkProps) => {
  return (
    <NextLink href={props.href} passHref>
      <Link isExternal={props.external}>
        <HStack spacing={2}>
          {props.icon}
          {props.children}
        </HStack>
      </Link>
    </NextLink>
  );
};

export default CustomLink;

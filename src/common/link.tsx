import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type LinkProps = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
};

const CustomLink = (props: LinkProps) => {
  return (
    <NextLink href={props.href} passHref>
      <Link isExternal={props.external}>{props.children}</Link>
    </NextLink>
  );
};

export default CustomLink;

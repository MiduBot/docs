import Header from "@/components/header";
import { LayoutProps } from "@/interfaces/layout";
import { Container } from "@chakra-ui/react";
import Explorer from "@/components/explorer";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container maxW="90%">
        <Explorer>{children}</Explorer>
      </Container>
    </>
  );
};

export default Layout;

import Header from "@/components/header";
import { LayoutProps } from "@/interfaces/layout";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container maxW="90%">
      {children}
      </Container>
    </>
  );
};

export default Layout;

import Header from "@/components/header";
import { LayoutProps } from "@/interfaces/layout";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

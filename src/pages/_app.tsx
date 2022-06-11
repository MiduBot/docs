import type { AppProps } from "next/app";

// Chakra UI & Custom Styles ->
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import "@/styles/global.css";
import Layout from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

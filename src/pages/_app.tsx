import type { AppProps } from "next/app";

// Chakra UI & Custom Styles ->
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import "@/styles/global.css";
import Layout from "@/layout";

// nProgress ->
import NextProgress from "next-progress";

// Prism Code Highlighting ->
import "@/styles/prism-one-dark.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress delay={300} options={{ showSpinner: false }} />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

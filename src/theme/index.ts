import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#f2f2f3",
      dark: "#1D1D1D",
    },
  },
  fonts: {
    body: "Inter-Regular, sans-serif",
    heading: "Inter-Semibold, sans-serif",
    mono: "Cascadia-Code, monospace",
  },
  styles: {
    global: (props: ChakraProps) => ({
      "html, body": {
        height: "100%",
        maxHeight: "100vh",
        background: mode("bg.light", "bg.dark")(props),
        fontSize: "14px",
      },
    }),
  },
});

export default theme;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Sun, Moon } from "phosphor-react";

const ChangeTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const key = useColorModeValue("Dark", "Light");
  const icon = useColorModeValue(<Moon size="22" />, <Sun size="22" />);

  return (
    <IconButton
      title={`${key} theme`}
      aria-label="Toggle theme"
      variant="ghost"
      icon={icon}
      onClick={toggleColorMode}
    />
  );
};

export default ChangeTheme;

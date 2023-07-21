import React from 'react';
import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme='green' />
        <Text>Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
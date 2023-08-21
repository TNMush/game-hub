import { Text, Switch, HStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch colorScheme="purple" onChange={toggleColorMode} />
        <Text>{colorMode + " mode"}</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;

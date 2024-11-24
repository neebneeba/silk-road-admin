import { HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <HStack
      border={"none"}
      borderTop={"solid 1px"}
      bgGradient={"to-r"}
      gradientFrom={"blue.400"}
      gradientTo={"pink.400"}
      borderColor={"blue.300"}
      width={"100%"}
      padding={5}
      color={"white"}
    >
      <Text>Silk Road 2024</Text>
    </HStack>
  );
};

export default Footer;

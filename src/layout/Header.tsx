import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";

// Components
import { HStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/Avatar";
import { ColorModeButton } from "@/components/ui/color-mode";

const Navbar: FC = () => {
  const navigate = useNavigate();

  function logout() {
    Cookies.remove("access_token");
    navigate(0);
  }

  return (
    <HStack
      position={"sticky"}
      top={0}
      zIndex={2}
      width={"100%"}
      bgGradient={"to-b"}
      gradientFrom="blue.500"
      gradientTo={"cyan.500"}
      paddingY={2}
      paddingX={5}
      justifyContent="space-between"
    >
      <HStack>
        <Avatar />
        <ColorModeButton />
      </HStack>
      <Button
        type="button"
        marginY="auto"
        color="white"
        bgColor={"transparent"}
        paddingX={2}
        onClick={logout}
        _hover={{
          textDecoration: "underline",
        }}
      >
        <CiLogout />
        Гарах
      </Button>
    </HStack>
  );
};

export default Navbar;

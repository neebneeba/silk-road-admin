import { FC, ReactElement, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "@/store";

// Slice
import { setConfig } from "@/slices/config.slice";

// Components
import { Box, Center, Flex, Square, Stack, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";

const menus: Array<{
  name: string;
  path: string;
  icon: ReactElement;
}> = [
  {
    name: "Нүүр хуудас",
    icon: <RiHome2Line size={24} />,
    path: "/",
  },
  {
    name: "Ангилал",
    icon: <BiCategory size={24} />,
    path: "/category",
  },
  {
    name: "Бүтээгдэхүүн",
    icon: <BsBoxSeam size={24} />,
    path: "/product",
  },
];

const Sidebar: FC = () => {
  const { sidebarIsOpen } = useSelector((state: RootState) => state.config);
  const location = useLocation();
  const dispath = useDispatch();

  function isActive(path: string) {
    return location.pathname === path;
  }

  function toggleSidebar(isOpen: boolean) {
    dispath(
      setConfig({
        sidebarIsOpen: !isOpen,
      })
    );
  }

  return (
    <Stack
      position={"sticky"}
      top={0}
      height={"100vh"}
      bgColor={"white"}
      border={"none"}
      borderRight={"solid 1px"}
      borderColor={"gray.300"}
      gap={4}
      padding={2}
      width={sidebarIsOpen ? "64" : "min-content"}
    >
      {/* App icon */}
      <Square
        bgColor={"blue.500"}
        borderRadius={"sm"}
        color={"white"}
        size={12}
      >
        SR
      </Square>

      {/* Main menu section */}
      <Flex direction={"column"} gap={1}>
        {menus.map((item) => (
          <Link key={useId()} to={item.path}>
            <Box
              borderRadius={"sm"}
              bgColor={isActive(item.path) ? "blue.600" : "transparent"}
              color={isActive(item.path) ? "white" : "gray.500"}
              _hover={{
                bgColor: "blue.600",
                color: "white",
              }}
            >
              {sidebarIsOpen ? (
                <Center inline gap={2}>
                  <Square size={12}>{item.icon}</Square>
                  <Text textStyle={"sm"}>{item.name}</Text>
                </Center>
              ) : (
                <Square size={12}>{item.icon}</Square>
              )}
            </Box>
          </Link>
        ))}
      </Flex>

      {/* Close and open button */}
      <Button
        type="button"
        onClick={() => toggleSidebar(sidebarIsOpen)}
        height={12}
        width={12}
        marginTop={"auto"}
        marginLeft={"auto"}
        borderRadius={"sm"}
        borderColor={"gra"}
        bgColor={"transparent"}
        color={"gray.500"}
        _hover={{
          bgColor: "blue.600",
          color: "white",
        }}
      >
        {sidebarIsOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </Button>
    </Stack>
  );
};

export default Sidebar;

import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

// Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// Page
import Login from "@/pages/Login";

// Slice
import { setUser } from "@/slices/user.slice";

const Layout: FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  const accessToken = Cookies.get("access_token");

  if (!accessToken) {
    return <Login />;
  }

  const decoded = jwtDecode<{
    username: string;
    email: string;
    phone_number: number;
    profile_picture: string | null;
    exp: number;
  }>(accessToken);

  if (decoded.exp < Date.now() / 1000) {
    Cookies.remove("access_token");

    return <Login />;
  }

  const dispatch = useDispatch();

  dispatch(
    setUser({
      username: decoded.username,
      email: decoded.email,
      phone_number: decoded.phone_number,
      profile_picture: decoded.profile_picture,
    })
  );

  return (
    <Flex gapX={0} bgColor="gray.100" gap={0}>
      <Sidebar />
      <Stack justifyContent={"start"} gap={0} height={"100%"} width={"100%"}>
        <Header />
        <Stack width="100%" bgColor="white" padding={5} gap={5}>
          <HStack justifyContent="space-between">
            <Heading marginY="auto">{title}</Heading>
          </HStack>
          {children}
        </Stack>
        <Footer />
      </Stack>
    </Flex>
  );
};

export default Layout;

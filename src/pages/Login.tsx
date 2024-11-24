import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import axiosInstance from "@/utils/api";
import { toast, TypeOptions } from "react-toastify";
import Cookies from "js-cookie";

// Components
import { Center, Input, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { IoLogInOutline } from "react-icons/io5";

const Login: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitLogin(e: FormEvent) {
    e.preventDefault();

    axiosInstance
      .post<{
        access_token: string;
      }>("/auth/sign-in-admin", {
        username,
        password,
      })
      .then((response) => {
        Cookies.set("access_token", response.data.access_token, {
          sameSite: "Strict",
          secure: true,
        });

        navigate(0);
      })
      .catch((error: AxiosError) => {
        let message = "";
        let type: TypeOptions = "default";

        switch (error.status) {
          case 401:
            message = "Нэвтрэх нэр эсвэл нууц үг буруу байна!";
            type = "warning";
            break;

          default:
            message = "Сервертэй холбогдоход алдаа гарлаа!";
            type = "error";
            break;
        }

        toast(message, {
          type,
          position: "top-center",
        });
      });
  }

  return (
    <Center height={"vh"} bgColor={"white"}>
      <Stack
        as={"form"}
        justifyContent={"space-between"}
        padding={10}
        rounded={"sm"}
        gap={10}
        color={"gray.900"}
        width={"100%"}
        maxWidth={500}
        onSubmit={(e) => submitLogin(e)}
      >
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Нэвтрэх нэр"
          variant={"flushed"}
          paddingX={2}
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Нууц үг"
          variant={"flushed"}
          paddingX={2}
        />
        <Button
          mt={10}
          type="submit"
          border={"none"}
          bgGradient={"to-br"}
          gradientFrom={"pink.300"}
          gradientTo={"purple.500"}
          color={"white"}
          height={12}
        >
          <IoLogInOutline />
          Нэвтрэх
        </Button>
      </Stack>
    </Center>
  );
};

export default Login;

import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import axiosInstance from "../utils/api";
import { toast, TypeOptions } from "react-toastify";
import Cookies from "js-cookie";

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
    <div className="h-screen flex bg-gradient-to-tr from-indigo-900 to-slate-600">
      <form
        onSubmit={(e) => submitLogin(e)}
        className="px-20 py-40 m-auto flex flex-col space-y-5 bg-white"
      >
        <input
          type="text"
          placeholder="Нэвтрэх нэр"
          className="border px-2 py-2 rounded border-gray-600"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Нууц үг"
          className="border px-2 py-2 rounded border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 p-2 text-white rounded">
          Нэвтрэх
        </button>
      </form>
    </div>
  );
};

export default Login;

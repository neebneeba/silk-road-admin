import { FC, FormEvent, useState } from "react";
import { AxiosError } from "axios";
import axiosInstance from "../../api/axios";
import { toast, TypeOptions } from "react-toastify";

const Login: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitLogin(e: FormEvent) {
    e.preventDefault();

    axiosInstance
      .post("/auth/sign-in", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
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
    <div className="h-screen flex">
      <form
        onSubmit={(e) => submitLogin(e)}
        className="px-20 py-40 m-auto flex flex-col space-y-5 bg-gray-300"
      >
        <input
          type="text"
          placeholder="Нэвтрэх нэр"
          className="border px-2 py-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Нууц үг"
          className="border px-2 py-2 rounded"
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

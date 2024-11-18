import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

// Components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// Page
import Login from "@/pages/Login";

// Slice
import { setUser } from "@/slices/user.slice";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
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
    <div className="flex flex-col h-screen relative bg-gray-100">
      <div className="flex p-2 space-x-2 flex-grow absolute h-screen w-full">
        <Sidebar />
        <div className="flex-grow mt-12 rounded-lg shadow border bg-white">
          <div className="h-full overflow-hidden">{children}</div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Layout;

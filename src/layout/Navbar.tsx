import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// Components
import Avatar from "../components/Avatar";

const Navbar: FC = () => {
  const navigate = useNavigate();

  function logout() {
    Cookies.remove("access_token");
    navigate(0);
  }

  return (
    <div className="h-12 border-b border-gray-400 bg-blue-500 px-5 flex justify-between sticky top-0">
      <Avatar />
      <button
        type="button"
        onClick={logout}
        className="p-2 my-auto  text-white flex hover:underline transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 my-auto mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
        Гарах
      </button>
    </div>
  );
};

export default Navbar;

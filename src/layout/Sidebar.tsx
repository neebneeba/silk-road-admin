import { FC, ReactElement, useId, useState } from "react";
import { Link } from "react-router-dom";

const menus: Array<{
  name: string;
  path: string;
  icon: ReactElement;
}> = [
  {
    name: "Нүүр хуудас",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 m-auto w-10 flex-grow-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    path: "/",
  },
  {
    name: "Ангилал",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 m-auto w-10 flex-grow-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6Z"
        />
      </svg>
    ),
    path: "/category",
  },
  {
    name: "Бүтээгдэхүүн",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 m-auto w-10 flex-grow-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
    ),
    path: "/product",
  },
];

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mt-12 p-2 bg-zinc-800 rounded-lg flex flex-col space-y-10 ${
        isOpen ? "w-64" : ""
      }`}
    >
      {/* App icon */}
      <div className="h-12 w-12 bg-blue-500 rounded text-center content-center">
        <h1 className="font-semibold text-white">SR</h1>
      </div>

      {/* Main menu section */}
      <div className="text-gray-300 flex flex-col space-y-2 flex-grow">
        {menus.map((item) => (
          <Link
            key={useId()}
            to={item.path}
            className={`h-12 flex rounded text-xs font-semibold hover:bg-gray-600 transition-colors ${
              isOpen ? "space-x-1 px-2" : "w-12"
            }`}
          >
            {item.icon}
            {isOpen && (
              <h3 className="my-auto flex-grow text-start">{item.name}</h3>
            )}
          </Link>
        ))}
      </div>

      {/* Close and open button */}
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="h-12 w-12 flex hover:bg-gray-600 rounded transition-colors text-gray-300 ml-auto"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Sidebar;

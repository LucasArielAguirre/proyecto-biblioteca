import { Link } from "react-router-dom";
import Book from "./icons/Book";
import Configicon from "./icons/Configicon";
import { useState } from "react";

const NavbarAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="fixed z-30 w-full h-14 bg-[--var-bgcolor] flex items-center px-5 shadow-md">
      <div className="flex-1">
        <Link to="/admin" className="">
          <Book />
        </Link>
      </div>
      <ul className="flex gap-2 mr-4">
        <li>
          <Link
            to="/admin"
            className="flex py-2 px-3 font-texth1 text-[--var-color-text] hover:underline decoration-[--var-color-text-red] hover:scale-110 transition-all duration-400"
          >
            INICIO
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            className="flex py-2 px-3 font-texth1 text-[--var-color-text] hover:underline decoration-[--var-color-text-red] hover:scale-110 transition-all duration-400"
          >
            MATERIALES
          </button>
          {isDropdownOpen && (
            <div className="absolute w-full top-full left-0 bg-white shadow-md rounded-lg">
              <ul className="flex flex-col">
                <li>
                  <Link
                    to="/admin/allsearchad"
                    className="block py-2 px-3 text-[--var-color-text] hover:bg-gray-200 transition-all duration-300"
                  >
                    LIBROS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/searchutilesad"
                    className="block py-2 px-3 text-[--var-color-text] hover:bg-gray-200 transition-all duration-300"
                  >
                    ÚTILES
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        
        <li>
          <Link
            to="/admin/estados"
            className="flex py-2 px-3 font-texth1 text-[--var-color-text] hover:underline decoration-[--var-color-text-red] hover:scale-110 transition-all duration-400"
          >
            <Configicon/>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavbarAdmin;

import { Link } from "react-router-dom";
import Book from "./icons/Book";
import Configicon from "./icons/Configicon";

const NavbarAdmin = () => {
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
        <li>
          <Link
            to="/admin/allsearchad"
            className="flex py-2 px-3 font-texth1 text-[--var-color-text] hover:underline decoration-[--var-color-text-red] hover:scale-110 transition-all duration-400"
          >
            LIBROS
          </Link>
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

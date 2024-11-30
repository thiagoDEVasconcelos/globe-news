import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="hover:rounded-lg hover:border-2 hover:border-black"
      >
        <MenuIcon fontSize="large"/>
      </button> 

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="p-4">
          <h2 className="text-2xl">Menu Lateral</h2>
          <ul className="mt-6">
            <li className="mb-4">
              <a href="#" className="text-white">
                Item 1
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white">
                Item 2
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-white">
                Item 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

import { useEffect, useState } from "react";
import { navbar } from "../data/data.js";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    let scroll = window.scrollY;
    if (scroll > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };
  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <div
      className={
        changeColor
          ? "flex justify-between px-10 bg-green-200 sticky top-0 transition duration-500 ease-in-out mix-blend-overlay backdrop-filter backdrop-blur-md shadow transform -translate-y-2"
          : "flex justify-between px-10 bg-white"
      }
    >
      <div>
        <h1 className="text-xl font-bold py-5">KANTIN</h1>
      </div>
      <div className="flex flex-row">
        {navbar.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "bg-green-400 py-5 px-5 text-white hover:bg-green-400"
                  : "py-5 px-5 hover:text-green-400"
              }
            >
              {item.nama}
            </NavLink>
          );
        })}
      </div>

      <div>
        <h1 className="py-5">Login</h1>
      </div>
    </div>
  );
}

export default Navbar;

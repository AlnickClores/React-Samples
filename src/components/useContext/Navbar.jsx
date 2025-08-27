import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/UseContextSamp";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="h-screen dark:bg-black dark:text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Navbar</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-white dark:bg-white dark:text-black font-semibold"
      >
        Toggle {theme === "light" ? "Dark" : "Light"}
      </button>
      <h1 className="dark:bg-black dark:text-white">TEST</h1>
    </div>
  );
};

export default Navbar;

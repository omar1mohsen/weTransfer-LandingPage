import React from "react";

function NavBtn({ isOpen, setIsOpen }) {
  const genericHamburgerLine = `h-1 w-full my-1 rounded-full bg-[--primary-color] transition ease transform duration-300`;
  return (
    <button
      className="hidden max-sm:flex me-2 flex-col p-1 h-10 w-10 border-2 border-black rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2.5 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2.5 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

export default NavBtn;

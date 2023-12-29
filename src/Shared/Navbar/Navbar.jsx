import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <Link to="/" className="lg:ml-4">
        Home
      </Link>
      <Link to="/about" className="lg:ml-4">
        About
      </Link>
      <Link to="/contact" className="lg:ml-4">
        Contact
      </Link>
      <Link to="/services" className="lg:ml-4">
        Services
      </Link>
    </>
  );

  return (
    <Container>
      <div className="flex justify-between items-center">
        <div className="block lg:hidden">
          <button className="hidden lg:block lg:ml-4">Login</button>
          <IoMdMenu
            className="text-2xl cursor-pointer lg:hidden "
            onClick={toggleMenu}
          />
        </div>
        <div className="logo">
          <h1>Logo</h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <ul className="lg:flex lg:gap-4">{navList}</ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } lg:hidden transition-all duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform h-full w-[350px] bg-white text-black absolute top-0 left-0`}
        >
          <button
            className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
            onClick={() => setOpen(false)}
          >
            <RxCross1 />
          </button>

          <ul className="flex  flex-col p-5 gap-5 text-[18px]">{navList}</ul>
        </div>

        <div className="flex items-center">
          <div>
            <BsCartCheck className="text-2xl font-bold" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

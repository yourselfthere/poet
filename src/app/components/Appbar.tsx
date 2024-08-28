import React, { ReactNode } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";

interface Props {
  children: ReactNode;
}

const Appbar = ({ children }: Props) => {
  return (
    <div>
      <Navbar
        isBordered
        className="bg-gradient-to-tr from-orange-300 to-amber-100 text-white"
      >
        <NavbarBrand>
          <p className=" text-black  text-3xl tracking-tight  bg-clip-text ">
            People's Poetry Heaven
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">{children}</NavbarContent>
      </Navbar>
    </div>
  );
};

export default Appbar;

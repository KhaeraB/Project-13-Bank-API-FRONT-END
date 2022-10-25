// eslint-disable-next-line no-unused-vars
import React from "react";
import { HeaderNavbar, LogoImg } from "./index.styles";
import Logo from "../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderNavbar>
      <NavLink to={"/"} className="nav-link">
        <LogoImg src={Logo} alt="argent Bank logo" href="/" />
      </NavLink>

      <NavLink to={"/login"} className="nav-link">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </HeaderNavbar>
  );
}

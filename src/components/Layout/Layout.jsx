import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  HeaderNavbar,
  LogoImg,
  FooterContent,
  FooterText,
} from "./index.styles";
import Logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import authService from "../../features/authServices";

export const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.userDataLogin);
  const { firstName } = useSelector((state) => state.userDataLogin);


  const handleLogout = () => {
    dispatch(authService.logout())
    navigate("/");
  };
  return (
    <HeaderNavbar>
      <NavLink to={"/"} className="nav-link">
        <LogoImg src={Logo} alt="argent Bank logo" href="/" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {!token ? (
          <NavLink to={"/login"} className="nav-link">
          <FaUserCircle />
          Sign In
        </NavLink>
        ) : (
          ''
        )}
        {token ? (
          <div>
            <FaUserCircle className="fa" />
            <span>{firstName}</span>
        </div>
        ) : (
          ''
        )}
        {token ? (
          <NavLink to={"/"} className="nav-link" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
        ) : (
          ''
        )}
    </HeaderNavbar>
  );
};

export const Footer = () => {
  return (
    <FooterContent>
      <FooterText>Copyright 2020 Argent Bank</FooterText>
    </FooterContent>
  );
};

const Layout = () => {
  return <Outlet />;
};

export default Layout;

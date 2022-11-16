import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { FaUserCircle, FaSignOutAlt} from "react-icons/fa";
import {
  HeaderNavbar,
  LogoImg,
  FooterContent,
  FooterText,
  Register
} from "./index.styles";
import Logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { logout } from "../../features/auth/authServices";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.userDataLogin);
  const { firstName } = useSelector((state) => state.userDataProfile);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <HeaderNavbar>
      <NavLink to={"/"} className="nav-link">
        <LogoImg src={Logo} alt="argent Bank logo" href="/" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <Register>
        {!token ? (
          <NavLink to={"/login"} className="nav-link">
            <FaUserCircle />
            Sign In
          </NavLink>
        ) : (
          ""
        )}
        {token ? (
          <div className="userName">
            <FaUserCircle className="fa" />
            <span>{firstName}</span>
          </div>
        ) : (
          ""
        )}
        {token ? (
          <NavLink to={"/"} className="nav-link" onClick={handleLogout}>
            <FaSignOutAlt/>
            Sign Out
          </NavLink>
        ) : (
          ""
        )}
      </Register>
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

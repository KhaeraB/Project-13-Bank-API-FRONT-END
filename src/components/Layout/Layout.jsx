import { Link, Outlet } from "react-router-dom"
import React from "react";
import {FaUserCircle} from "react-icons/fa"
import { HeaderNavbar, LogoImg, FooterContent, FooterText } from "./index.styles";
import Logo from "../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentFirstName, selectCurrentToken } from "../../features/auth/authSlice";

export const Header= () =>{
  const dispatch = useDispatch()
  const userFirstName = useSelector(selectCurrentFirstName)
  const token = useSelector(selectCurrentToken)

  const onLogout = ()=>{ 
    dispatch(logOut())
  }
  return (
   
    <HeaderNavbar>
      <NavLink to={"/"} className="nav-link">
        <LogoImg src={Logo} alt="argent Bank logo" href="/" />
      </NavLink>

      {token ? (
       
      <>
        <div className="mainNavItem">
          <FaUserCircle className="fa" />
          <span>{userFirstName}</span>
        
        <Link to="/" className="mainNavItem"  onClick={onLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
        </div>
      </>
      ) : ( 
      <NavLink to={"/login"} className="nav-link">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
      )
    } 
     
    </HeaderNavbar>
  );
}

export const Footer = () => {
    return (
      <FooterContent>
        <FooterText>Copyright 2020 Argent Bank</FooterText>
      </FooterContent>
    );
}

const Layout = () => {
    return <Outlet />
}

export default Layout
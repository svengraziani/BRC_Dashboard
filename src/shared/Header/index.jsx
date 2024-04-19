import React from "react";
import "./header.scss";
import Image from "next/image";
import logoImg from "../../Assets/images/header-logo.svg";
import logoutImg from "../../Assets/images/icon-logout.svg";
import userImg from "../../Assets/images/icon-user.svg";
import '../../css/sass/global.scss';
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarVisibility } from "../../redux/slice/globalSlice";

function Header() {
  const dispatch = useDispatch()
  const gloabalStore = useSelector(state => state.global)
  const {isSidebarVisible} = gloabalStore
  
  return <header className="header">
    <div className="logo-wrap">
<<<<<<< HEAD
      <Button className="menu">
=======
      <Button type="button" className="menu" onClick={()=> {
        dispatch(setSidebarVisibility({
          sidebarVisibility: !isSidebarVisible
        }))
      }}>
>>>>>>> 10216c6ce224720e1c2b6fafd8af184aa38f9f49
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </Button>
    <div className="logo">
      <Image src={logoImg} alt="Logo" />
    </div>
    </div>
    <div className="user-wrap">
      <span className="user"><i className="icon-user">
      <Image src={userImg} alt="User" />
        </i>Handwerksbetrieb Solar GmbH (Admin Handwerksbetrieb)</span>
      <Button type="button" className="logout"><i className="icon-logout">
        <Image src={logoutImg} alt="Logout" />
        </i>Logout</Button>
    </div>
  </header>;
}

export default Header;

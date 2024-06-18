import React, { useEffect, useState } from "react";
import "./header.scss";
import Image from "next/image";
import logoImg from "../../Assets/images/header-logo.svg";
import logoutImg from "../../Assets/images/icon-logout.svg";
import userImg from "../../Assets/images/icon-user.svg";
import '../../css/sass/global.scss';
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarVisibility } from "../../redux/slice/globalSlice";
import { useRouter } from "next/navigation";

type CraftInfo = {
  craft_business_name: string;
  craft_business_type: string;
}

function Header() {
  const dispatch = useDispatch();
  const gloabalStore = useSelector((state: any) => state.global);
  const {isSidebarVisible} = gloabalStore;
  const router = useRouter();
  const [craftBusiness, setCraftBusiness] = useState<CraftInfo>()
  
  useEffect(()=> {
    let craftBusinessInfoString = localStorage.getItem("craft_business")
    let craftBusinessInfo = craftBusinessInfoString ? JSON.parse(craftBusinessInfoString) : null;

    setCraftBusiness(craftBusinessInfo)
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem("token");
    router.push("/login")
  }
  
  return <header className="header">
    <div className="logo-wrap">
      <Button type="button" className="menu" onClick={()=> {
        dispatch(setSidebarVisibility({
          sidebarVisibility: !isSidebarVisible
        }))
      }}>
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </Button>
    <div className="logo">
      <Image src={logoImg} alt="Logo" />
    </div>
    </div>
    <div className="user-wrap">
      <div className="user-block d-flex align-items-center">
        <i className="icon-user"><Image src={userImg} alt="User" /></i>
        <span className="user">{craftBusiness?.craft_business_name} ({craftBusiness?.craft_business_type})</span>
      </div>
      <Button className="logout" onClick={logoutHandler}><i className="icon-logout">
        <Image src={logoutImg} alt="Logout" />
        </i>
        <span className="logout-txt">Logout</span></Button>
    </div>
  </header>;
}

export default Header;

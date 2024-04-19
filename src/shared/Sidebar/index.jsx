import React, { useEffect, useState } from "react";

import '../../css/sass/global.scss';
import './sidebar.scss';
import Image from "next/image";
import imgDashboard from "../../Assets/images/icon-dashboard.svg";
import imgLogbuch from "../../Assets/images/icon-logbuch.svg";
import imgUser from "../../Assets/images/icon-user.svg";
import imgMultiUser from "../../Assets/images/icon-multipleuser.svg";
import imgEinstellungen from "../../Assets/images/icon-setting.svg";
import imgSupport from "../../Assets/images/icon-support.svg";
import imgPlus from "../../Assets/images/icon-plus.svg";
import { Button, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useSelector } from "react-redux";

function Sidebar() {
  const [activeStatus, setActiveStatus] = useState("Dashboard")
  const globalStore = useSelector(state => state.global)
  const {isSidebarVisible} = globalStore;

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: imgDashboard,
      iClass: "icons"
    },
    {
      name: "Logbuch",
      href: "/logbuch",
      icon: imgLogbuch,
      iClass: "icons"
    },
    {
      name: "Mein Profil",
      href: "/profil",
      icon: imgUser,
      iClass: "icons icon-profile"
    },
    {
      name: "Benutzer",
      href: "/benutzer",
      icon: imgMultiUser,
      iClass: "icons"
    },
    {
      name: "Einstellungen",
      href: "/einstellungen",
      icon: imgEinstellungen,
      iClass: "icons"
    },
    {
      name: "Support",
      href: "/support",
      icon: imgSupport,
      iClass: "icons"
    },
  ]

  useEffect(()=> {
    const path = window.location.pathname;
    
    let findByPath = links.filter(item => {
      return item.href === path
    })

    setActiveStatus(findByPath[0].name)
  }, [])

  return <div className="sidebar">
    <div className="sidebar-menu">
    <ul>
      {links.map((item, index) => (
        <li key={index} >
        <Link href={item.href} data-showSidebar={isSidebarVisible} className={item.name === activeStatus ? "btn btn-nav active" : "btn btn-nav"}>
        <i className={item.iClass}><Image src={item.icon} alt="icon" /></i>{isSidebarVisible && item.name}
        </Link>
      </li>
      ))}

    </ul>
    </div>
    <Row className="justify-content-center">
      <Col md="10">
      <Button className="facility">
        <i className="icon-plus">
      <Image src={imgPlus} alt="Icon" />
      </i>
      {isSidebarVisible && <span>Nueu Anlage</span>}
      </Button>
      </Col>
    </Row>
    </div>;
}

export default Sidebar;

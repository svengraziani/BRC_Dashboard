import React, { useState } from "react";

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

function Sidebar() {
  const [activeStatus, setActiveStatus] = useState("Dashboard")

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

  return <div className="sidebar">
    <div className="sidebar-menu">
    <ul>
      {links.map((item, index) => (
        <li key={index} onClick={()=> setActiveStatus(item.name)}>
        <Link href={item.href} className={item.name === activeStatus ? "btn btn-nav active" : "btn btn-nav"}>
        <i className={item.iClass}><Image src={item.icon} alt="icon" /></i>{item.name}
        </Link>
      </li>
      ))}

    </ul>
    </div>
    <Row>
      <Col md="10">
      <Button type="button" className="facility"><i className="icon-plus">
      <Image src={imgPlus} alt="Icon" />
      </i>Neue Anlage</Button>
      </Col>
    </Row>
    </div>;
}

export default Sidebar;

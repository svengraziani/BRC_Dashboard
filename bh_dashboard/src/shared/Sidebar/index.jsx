import React from "react";

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

function Sidebar() {
  return <div className="sidebar">
    <div className="sidebar-menu">
    <ul>
      <li>
        <Button type="button" variant="nav">
        <i className="icon-dashboard icons"><Image src={imgDashboard} alt="icon" /></i>Dashboard
        </Button>
      </li>
      <li>
        <Button type="button" variant="nav">
        <i className="icon-logbuch icons"><Image src={imgLogbuch} alt="icon" /></i>Logbuch
        </Button>
      </li>
      <li>
        <Button type="button" variant="nav">
        <i className="icon-profile icons"><Image src={imgUser} alt="icon" /></i>Mein Profil
        </Button>
      </li>
      <li>
        <Button type="button" variant="nav">
        <i className="icon-benutzer icons"><Image src={imgMultiUser} alt="icon" /></i>Benutzer
        </Button>
      </li>
      <li>
        <Button type="button" variant="nav">
        <i className="icon-einstellungen icons"><Image src={imgEinstellungen} alt="icon" /> 
        </i>Einstellungen
        </Button>
      </li>
      <li>
        <Button type="button" variant="nav">
        <i className="icon-support icons"><Image src={imgSupport} alt="icon" /></i>Support
        </Button>
      </li>
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

"use client";

import Image from "next/image";
import imgSetting from '../../Assets/images/icon-setting.svg';
import './einstellungen.scss';
import '../../css/sass/global.scss';
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";


function Einstellungen() {
  return (
    <section className="einstellungen">
      <Header />
    <div className="einstellungen-wrap">
      <Sidebar />
      <div className="einstellungen-block">
      <div className="heading-wrap">
        <h2><i className="icon-einstellungen">
            <Image src={imgSetting} alt="Icon"/>    
        </i>Einstellungen</h2>
      </div>
      <div className="email-wrap">
        <span className="email-notification">E-Mail Benachrichtigungen</span>
        <p>Hier können Sie einstellen, zu welchen Ereignissen Sie Benachrichtigungen per E-Mail erhalten wollen.</p>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Einstellungen

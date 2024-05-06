"use client";

import Image from "next/image";
import imgSetting from '../../Assets/images/icon-setting.svg';
import './einstellungen.scss';
import '../../css/sass/global.scss';
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import { Form } from 'react-bootstrap';


function Einstellungen() {
  return (
    <>
      <Header />
    <section className="dashboard einstellungen">
      <Sidebar />
      <div className="dashboard-right">
      <div className="heading-wrap">
        <h2><i className="icon-einstellungen">
            <Image src={imgSetting} alt="Icon"/>    
        </i>Einstellungen</h2>
      </div>
      <div className="email-wrap">
        <span className="email-notification">E-Mail Benachrichtigungen</span>
        <p>Hier können Sie einstellen, zu welchen Ereignissen Sie Benachrichtigungen per E-Mail erhalten wollen. 
        </p>
        <div className="toggle-wrap">
          <div className="toggle-btn">
            <Form.Check
              type="switch"
              id="custom-switch1"
              label="Benachrichtigung A"
            />
          </div>
          <div className="toggle-btn">
            <Form.Check
              type="switch"
              id="custom-switch2"
              label="Benachrichtigung B"
            />
          </div>
          <div className="toggle-btn">
            <Form.Check
              type="switch"
              id="custom-switch3"
              label="Benachrichtigung C"
            />
          </div>
          <div className="toggle-btn">
            <Form.Check
              type="switch"
              id="custom-switch4"
              label="Benachrichtigung D"
            />
          </div>
        </div>
      </div>
      <div className="notice">
        <div className='notice-primary'>
        <span className='notice-head'>HINWEIS</span>
        </div>
        <p>Platzhalter Ansicht</p>
        <p>E-Mail Benachrichtigungen wurden in die Ausbaustufe verschoben.</p>
    </div>
      </div>
    </section>
    </>
  )
}

export default Einstellungen

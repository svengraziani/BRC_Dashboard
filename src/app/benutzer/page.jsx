"use client";

import Image from "next/image";
import imgMultiuser from '../../Assets/images/icon-multipleuser.svg';
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import './benutzer.scss';
import { Button } from "react-bootstrap";

function Benutzer() {
  return (
    <section className="benutzer">
      <Header />
      <div className="benutzer-wrap">
        <Sidebar />
        <div className="benutzer-block">
            <div className="heading-wrap">
                <h2><i className="icon-multiuser">
                    <Image src={imgMultiuser} alt="Icon"/>
                </i>Benutzer</h2>
                <Button>Servicetechniker einladen</Button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Benutzer

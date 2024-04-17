"use client";

import Image from "next/image";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import DashboardTable from "../../shared/Table";
import './logbuch.scss';
import imgLogbuch from '../../Assets/images/icon-logbuch.svg';
import { Col, Row } from "react-bootstrap";

function Logbuch() {
  return (
    <section className="logbuch">
        <Header />
          <div className="logbuch-wrap">
              <Sidebar />
              <div className="logbuch-block">
                <Row className="heading-wrap">
                  <Col md="6">
                    <h2><i className='icon-profil'>
                          <Image src={imgLogbuch} alt='Icon' />
                      </i>Logbuch</h2>
                  </Col>
                  <Col md="6">
                  <p>Letzte Aktualisierung: 24.10.2023, 15:00 Uhr</p>
                  </Col>
                </Row>
                  <DashboardTable />
              </div>
          </div>
    </section>
  )
}

export default Logbuch

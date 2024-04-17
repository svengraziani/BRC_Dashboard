"use client";

import './dashboard.scss';
import '../../css/sass/global.scss';
import Sidebar from "../../shared/Sidebar";
import Image from "next/image";
import imgAnlagen from '../../Assets/images/icon-anlagen.svg';
import DashboardTable from "../../shared/Table";
import Header from '../../shared/Header';
import { Col, Row } from 'react-bootstrap';

export default function Dashboard() {
    const statusFilter = ["Warnung", "Felher", "Offene Inbetriebnahme"]

    return (
        <section className="dashboard">
            <Header />
            <div className="dashboard-wrap">
            <Sidebar />
            <div className="dashboard-block">
                <Row className='heading-wrap'>
                    <Col md="6">
                    <h2><i className="icon-anlagen">
                    <Image src={imgAnlagen} alt="Icon" />
                    </i>Dashboard - Anlagen</h2>
                    </Col>
                    <Col md="6">
                    <p>Letzte Aktualisierung: 24.10.2023, 15:00 Uhr</p>
                    </Col>
                </Row>
                {/* Table component */}
                <DashboardTable statusFilter={statusFilter} filterName="Status Filter"/>
                
                <div className="filter-wrap"></div>
            </div>
            </div>
        </section>
    )
}
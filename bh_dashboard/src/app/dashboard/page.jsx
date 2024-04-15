"use client";

import Header from "../../shared/Header";
import './dashboard.scss';
import '../../css/sass/global.scss';
import Sidebar from "../../shared/Sidebar";
import Image from "next/image";
import imgAnlagen from '../../Assets/images/icon-anlagen.svg';
import { Col, Form, Row } from "react-bootstrap";
import DashboardTable from "../../shared/Table";

export default function Dashboard() {
    return (
        <section className="dashboard">
            <Header />
            <div className="dashboard-wrap">
            <Sidebar />
            <div className="dashboard-block">
                <div className="heading-wrap">
                <h2><i className="icon-anlagen">
                    <Image src={imgAnlagen} alt="Icon" />
                </i>Dashboard - Anlagen</h2>
                <p>Letzte Aktualisierung: 24.10.2023, 15:00 Uhr</p>
                </div>

                {/* Table component */}
                <DashboardTable />
                
                <div className="filter-wrap"></div>
            </div>
            </div>
        </section>
    )
}
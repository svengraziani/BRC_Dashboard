"use client";

import './dashboard.scss';
import '../../css/sass/global.scss';
import Sidebar from "../../shared/Sidebar";
import Image from "next/image";
import imgAnlagen from '../../Assets/images/icon-anlagen.svg';
import imgRepair from '../../Assets/images/icon-inbetrieb.svg';
import imgError from '../../Assets/images/icon-error.svg';
import imgWarning from '../../Assets/images/icon-warning.svg';
import Header from '../../shared/Header';
import { Button, Col, Row } from 'react-bootstrap';
import ReactTable from '../../shared/NewTable';
import { createColumnHelper } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { MdNavigateNext } from 'react-icons/md';

export default function Dashboard() {
    const statusFilter = ["Warnung", "Felher", "Offene Inbetriebnahme"]
    const router = useRouter();

    const defaultData = [
        {
            aliasName: "Satteldachanlage C",
            anlagenId: "45465",
            name: "Anlage C",
            nameEigentumer: "Karina Drehmann",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 13, 53111 Bonn",
            aktionen: ""
        },
        {
            aliasName: "Satteldachanlage D",
            anlagenId: "345345",
            name: "Anlage D",
            nameEigentumer: "Lukas Brunner",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 15, 53111 Bonn",
            aktionen: ""
        },
        {
            aliasName: "Satteldachanlage B",
            anlagenId: "654124",
            name: "Anlage B",
            nameEigentumer: "Mario Meier",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 22, 53111 Bonn",
            aktionen: [<i className='icon-repair' onClick={() => router.push("/dashboard/create")}><Image src={imgRepair} alt='Icon' /></i>]
        },
        {
            aliasName: "Satteldachanlage A",
            anlagenId: "458741",
            name: "Anlage A",
            nameEigentumer: "Max Mustermann",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 2, 53111 Bonn",
            aktionen: ""
        },
        {
            aliasName: "Satteldachanlage E",
            anlagenId: "485962",
            name: "Anlage E",
            nameEigentumer: "Max Mustermann",
            handwerk: "Handwerksbetrieb Solar GmbH",
            adsressder: "Beispielstraße 205, 53111 Bonn",
            aktionen: ""
        },
    ]

    const columnHelper = createColumnHelper()
  
    const columns = [
    columnHelper.accessor('aliasName', {
      header: "",
      cell: (props) => (<i className='icon-error'><Image src={imgError} alt='Icon' /></i>)
    }),
    columnHelper.accessor('aliasName', {
      cell: info => info.getValue(),
      header: "Alias-Name"
    }),
    columnHelper.accessor('anlagenId', {
      cell: info => info.getValue(),
      header: "Anlagen-ID"
    }),
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
      header: "Name"
    }),
    columnHelper.accessor('nameEigentumer', {
      cell: info => info.getValue(),
      header: "Name Eigentümer"
    }),
    columnHelper.accessor('handwerk', {
      cell: info => info.getValue(),
      header: "Handwerksbetrieb"
    }),
    columnHelper.accessor('adsressder', {
      cell: info => info.getValue(),
      header: "Adresse der Anlage"
    }),
    columnHelper.accessor('aktionen', {
      cell: info => info.getValue(),
      header: "Aktionen"
    }),
    columnHelper.accessor('aliasName', {
      cell: props => <Button variant='details' style={{cursor:"pointer"}} onClick={()=> router.push("/dashboard/details/xyz")}>Details<i className='icon-next'><MdNavigateNext size={18} /></i> </Button>,
      header: ""
    }),
  ]

    return (
        <>
        <Header />
        <section className="dashboard">
            <Sidebar />
            <div className="dashboard-right">
                <Row className='heading-wrap'>
                    <Col md="6">
                    <h2><i className="icon-head">
                    <Image src={imgAnlagen} alt="Icon" />
                    </i>Dashboard - Anlagen</h2>
                    </Col>
                    <Col md="6">
                    <p>Letzte Aktualisierung: 24.10.2023, 15:00 Uhr</p>
                    </Col>
                </Row>
                {/* Table component */}
                <ReactTable data={defaultData} columns={columns} isFilters={false} isStatusFilter={true} isCreation={true} isFiltersWrap={true} />
                {/* <DashboardTable statusFilter={statusFilter} filterName="Status Filter"/> */}
                <div className="filter-wrap"></div>
            </div>
        </section>
        </>
    )
}
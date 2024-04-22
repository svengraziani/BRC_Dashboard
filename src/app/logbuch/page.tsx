"use client";

import Image from "next/image";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import './logbuch.scss';
import imgLogbuch from '../../Assets/images/icon-logbuch.svg';
import { Col, Row, Button } from "react-bootstrap";
import ReactTable from "../../shared/NewTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MdNavigateNext } from 'react-icons/md';
import { useRouter } from "next/navigation";

function Logbuch() {

  const router = useRouter()

  const defaultData = [
    {
      datum: "18.12.2023, 18:07:01 Uhr",
      aliasName: "Satteldachanlage D",
      anlagenId: "345345",
      name: "Anlage D",
      gateway: "67890",
      string: "String 1",
      optimizer: "134567",
      meldung: "Dies ist ein Typoblindtext. An ihm kann..."
    },
    {
      datum: "18.12.2023, 18:07:01 Uhr",
      aliasName: "Satteldachanlage D",
      anlagenId: "345345",
      name: "Anlage D",
      gateway: "67890",
      string: "String 1",
      optimizer: "134567",
      meldung: "Dies ist ein Typoblindtext. An ihm kann..."
    },
    {
      datum: "18.12.2023, 18:07:01 Uhr",
      aliasName: "Satteldachanlage D",
      anlagenId: "345345",
      name: "Anlage D",
      gateway: "67890",
      string: "String 1",
      optimizer: "134567",
      meldung: "Dies ist ein Typoblindtext. An ihm kann..."
    },
    {
      datum: "18.12.2023, 18:07:01 Uhr",
      aliasName: "Satteldachanlage D",
      anlagenId: "345345",
      name: "Anlage D",
      gateway: "67890",
      string: "String 1",
      optimizer: "134567",
      meldung: "Dies ist ein Typoblindtext. An ihm kann..."
    },
  ]

  const columnHelper = createColumnHelper()
  
  const columns = [
    columnHelper.accessor('aliasName', {
      header: "Typ",
      cell: (props) => (<span>logo</span>)
    }),
    columnHelper.accessor('datum', {
      cell: info => info.getValue(),
      header: "Datum und Uhrzeit"
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
    columnHelper.accessor('gateway', {
      cell: info => info.getValue(),
      header: "Gateway"
    }),
    columnHelper.accessor('string', {
      cell: info => info.getValue(),
      header: "String"
    }),
    columnHelper.accessor('optimizer', {
      cell: info => info.getValue(),
      header: "Optimizer"
    }),
    columnHelper.accessor('meldung', {
      cell: info => info.getValue(),
      header: "Meldung"
    }),
    columnHelper.accessor('aliasName', {
      cell: props => <Button variant='details' style={{cursor:"pointer"}} onClick={()=> router.push("/dashboard/details/xyz")}>Details<i className='icon-next'><MdNavigateNext size={18} /></i> </Button>,
      header: ""
    }),
  ]

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
                  {/* <DashboardTable /> */}
                  <ReactTable data={defaultData} columns={columns} isFilters={true} isStatusFilter={false} isCreation={false} isFiltersWrap={true} />
              </div>
          </div>
    </section>
  )
}

export default Logbuch

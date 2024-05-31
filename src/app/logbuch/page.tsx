"use client";

import Image from "next/image";
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import './logbuch.scss';
import imgLogbuch from '../../Assets/images/icon-logbuch.svg';
import imgError from '../../Assets/images/icon-error.svg';
import { Col, Row, Button, Modal } from "react-bootstrap";
import ReactTable from "../../shared/NewTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MdNavigateNext } from 'react-icons/md';
import { useEffect, useState } from "react";
import SharedModal from "@/shared/Modal";
import { useSelector } from "react-redux";
import { apiCaller } from "@/services/apiCaller";

function MistakeModal() {
  const gloabalStore = useSelector((state: any) => state.global)
  const { isSidebarVisible } = gloabalStore
  return (
    <Modal.Body>
      <h2><i className="icon-warning"><Image src={imgError} alt='Icon' /></i>Felher</h2>
      <div className="description">
        <span className="report-head">Meldung</span>
        <p className="report-description">Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle
          Buchstaben da sind und wie sie aussehen.</p>
      </div>
      <div className="description">
        <span className="report-head">Datum und Uhrzeit</span>
        <p className="report-description">18.12.2023, 08:10:35 Uhr</p>
      </div>
      <div className="description">
        <span className="report-head">Anlagename</span>
        <p className="report-description">Satteldachanlage</p>
      </div>
      <div className="description">
        <span className="report-head">Gateway-ID</span>
        <p className="report-description">67890</p>
      </div>
      <div className="description">
        <span className="report-head">String</span>
        <p className="report-description">String 1</p>
      </div>
      <div className="description">
        <span className="report-head">Optimizer</span>
        <p className="report-description">134567</p>
      </div>
      <div className="description">
        <span className="report-head">Kunde</span>
        <p className="report-description">Max Mustermann</p>
      </div>
      <div className="description">
        <span className="report-head">Anlagestandort</span>
        <p className="report-description">Beispielstraße 2, 53111 Bonn</p>
      </div>
      <Button>Schließen</Button>
    </Modal.Body>
  )
}

function Logbuch() {
  const [mistakeModal, setMistakeModal] = useState<boolean>(false);
  const [query, setQuery] = useState<any>([])
  const [logbush, setLogbush] = useState(null)
  const [pageIndex, setPageIndex] = useState(1)
  const [search, setSearch] = useState("")
  const [numberOfRecords, setNumberOfRecords] = useState(0)
  
  const columnHelper = createColumnHelper()

  const columns = [
    columnHelper.accessor('aliasName', {
      header: "Typ",
      cell: (props) => (<span>logo</span>)
    }),
    columnHelper.accessor('timestamp', {
      cell: info => info.getValue(),
      header: "Datum und Uhrzeit"
    }),
    columnHelper.accessor('facility_alias_name', {
      cell: info => info.getValue(),
      header: "Alias-Name"
    }),
    columnHelper.accessor('facility', {
      cell: info => info.getValue(),
      header: "Anlagen-ID"
    }),
    columnHelper.accessor('facility_name', {
      cell: info => info.getValue(),
      header: "Name"
    }),
    columnHelper.accessor('gateway_device_id', {
      cell: info => info.getValue(),
      header: "Gateway"
    }),
    columnHelper.accessor('string', {
      cell: info => info.getValue(),
      header: "String"
    }),
    columnHelper.accessor('optimizer_id', {
      cell: info => info.getValue(),
      header: "Optimizer"
    }),
    columnHelper.accessor('log_message', {
      cell: info => info.getValue(),
      header: "Meldung"
    }),
    columnHelper.accessor('aliasName', {
      cell: props => <Button variant='details' style={{ cursor: "pointer" }} onClick={() => setMistakeModal(true)}>Details<i className='icon-next'><MdNavigateNext size={18} /></i> </Button>,
      header: ""
    }),
  ]

  const queryHandler = (type: any, queryData: any) => {
    const nameList: any = [];

    queryData.map((item: any) => {
      if (item.isChecked === true) {
        nameList.push(item.name)
      }
    })

    if (nameList.length === 0) {

      const updatedQuery = query.filter((item: any) => item?.name !== type);
      setQuery(updatedQuery);

      return;
    }

    let datacheck = query?.find((item: any) => item?.name === type)


    if (!datacheck) {
      // Name Doesn't exists

      const object = {
        name: type,
        searchQuery: nameList.join(",")
      }

      setQuery([...query, object])
    } else {
      const updatedQuery = query.map((item: any) => {
        if (item.name === type) {
          return { ...item, searchQuery: nameList.join(",") };
        }
        return item;
      });

      setQuery(updatedQuery);
    }
  }

  const pageChangeHandler = (pageIndex: number) => {
    setPageIndex(pageIndex);
  }

  useEffect(() => {
    let apiQuery = ''

    if (query) {
      query.map((item: any, index: any) => {
        apiQuery = apiQuery + `${item.name}=${item.searchQuery} ${index !== query.length - 1 ? "&" : ""}`
      })
    }

    apiCaller.get(`api/v1/asset-datapoint-logs/${apiQuery.length !== 0 ? `?${apiQuery.replace(/\s/g, "")}` : ``}?limit=10&offset=${pageIndex}&search=${search}`)
      .then(response => {
        setLogbush(response.data.results);
        setNumberOfRecords(response.data.count)
      })
  }, [query, pageIndex, search])

  return (
    <>
      <Header />
      <section className="dashboard logbuch">

        <SharedModal show={mistakeModal} modalContent={<MistakeModal />} onHide={() => setMistakeModal(false)} />

        <Sidebar />
        <div className='dashboard-right'>
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
          <ReactTable data={logbush ? logbush : []} setSearch={setSearch} pageChangeHandler={pageChangeHandler} queryHandler={queryHandler} columns={columns} isFilters={true} isStatusFilter={false} isCreation={false} isFiltersWrap={true} numberOfRecords={numberOfRecords} />
        </div>
      </section>
    </>
  )
}

export default Logbuch

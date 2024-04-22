"use client";

import Image from "next/image";
import imgMultiuser from '../../Assets/images/icon-multipleuser.svg';
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import './benutzer.scss';
import { Button, Col, Row, Form } from "react-bootstrap";
import ReactTable from "../../shared/NewTable";
import { createColumnHelper } from "@tanstack/react-table";
import { BsTrash3 } from "react-icons/bs";

const defaultData = [
  {
    name: "Wilhelm Kreuzer",
    emailAdd: "admin-wilhelmk@solar.com",
    role: "Admin Handwerksbetrieb (Meine Rolle)"
  },
  {
    name: "Wilhelm Kreuzer",
    emailAdd: "admin-wilhelmk@solar.com",
    role: "Admin Handwerksbetrieb (Meine Rolle)"
  },
  {
    name: "Wilhelm Kreuzer",
    emailAdd: "admin-wilhelmk@solar.com",
    role: "Admin Handwerksbetrieb (Meine Rolle)"
  },
  {
    name: "Wilhelm Kreuzer",
    emailAdd: "admin-wilhelmk@solar.com",
    role: "Admin Handwerksbetrieb (Meine Rolle)"
  },
  {
    name: "Wilhelm Kreuzer",
    emailAdd: "admin-wilhelmk@solar.com",
    role: "Admin Handwerksbetrieb (Meine Rolle)"
  },
  {
    name: "Wilhelm Kreuzer",
    emailAdd: "admin-wilhelmk@solar.com",
    role: "Admin Handwerksbetrieb (Meine Rolle)"
  }
]

function Benutzer() {
  const columnHelper = createColumnHelper()
  
  const columns = [
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
      header: "Name"
    }),
    columnHelper.accessor('emailAdd', {
      cell: info => info.getValue(),
      header: "E-Mail Adresse"
    }),
    columnHelper.accessor('role', {
      cell: info => info.getValue(),
      header: "Rolle"
    }),
    columnHelper.accessor('nameEigentümer', {
      cell: info => (
        <Form.Check
              type="switch"
              id="custom-switch"
            />
      ),
      header: "ist Admin"
    }),
    columnHelper.accessor('handwerksbetrieb', {
      cell: info => (
        <Button variant="trash"><i className="icon-trash"><BsTrash3 /></i></Button>
      ),
      header: "Aktionen"
    })
  ]

  return (
    <section className="benutzer">
      <Header />
      <div className="benutzer-wrap">
        <Sidebar />
        <div className="benutzer-block">
          <Row className="heading-wrap">
            <Col md="6">
            <h2><i className="icon-multiuser">
                    <Image src={imgMultiuser} alt="Icon"/>
                </i>Benutzer</h2>
            </Col>
            <Col md="6" className="d-flex justify-content-end">
            <Button>Servicetechniker einladen</Button>
            </Col>
          </Row>
            {/* Table Component */}
            <ReactTable data={defaultData} columns={columns} isFiltersWrap={false} />
        </div>
        <div>
        
        </div>
      </div>
      
    </section>
  )
}

export default Benutzer

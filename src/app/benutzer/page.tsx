"use client";

import Image from "next/image";
import imgMultiuser from '../../Assets/images/icon-multipleuser.svg';
import imgWarn from '../../Assets/images/icon-modal-warn.svg';
import Header from "../../shared/Header";
import Sidebar from "../../shared/Sidebar";
import './benutzer.scss';
import { Button, Col, Row, Form, Modal } from "react-bootstrap";
import ReactTable from "../../shared/NewTable";
import { createColumnHelper } from "@tanstack/react-table";
import { BsTrash3 } from "react-icons/bs";
import SharedModal from "@/shared/Modal";
import { useState } from "react";
import { FaQuestion } from "react-icons/fa6";

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

function InvitationSentModal() {
  return (
    <Modal.Body>
      <h2>Einladung wurde versendet</h2>
      <Button>OK</Button>
    </Modal.Body>
  )
}

function TechnicianModal() {
  const [invitationModal, setInvitationModal] = useState<boolean>(false);
  return (
    <>
    <SharedModal show={invitationModal} modalContent={<InvitationSentModal />} onHide={() => setInvitationModal(false)} />
    <Modal.Body>
      <h2>Laden Sie einen Servicetechniker ein</h2>
      <Form>
        <Form.Group className="form-block">
          <Form.Control type='email' placeholder="E-Mail" />
          <Form.Label>E-Mail</Form.Label>
        </Form.Group>
        <Button onClick={() => setInvitationModal(true)}>Einladen</Button>
      </Form>
    </Modal.Body>
    </>
  )
}

function DeleteUserModal() {
  return (
    <Modal.Body>
      <i className="icon"><Image src={imgWarn} alt="Icon" /></i>
      <h2>User löschen</h2>
      <p>Sind Sie sicher, dass sie den User löschen möchten?</p>
      <Button>Ja, User löschen</Button>
    </Modal.Body>
  )
}

function AdminRightsModal() {
  return (
    <Modal.Body>
      <i className="icon-question"><FaQuestion /></i>
      <h2>Adminrechte entfernen</h2>
      <p>Sind Sie sicher, dass sie dem User Adminrechte entziehen möchten?</p>
      <Button>Ja, Adminrechte entfernen</Button>
    </Modal.Body>
  )
}

function Benutzer() {
  const [technicianModal, setTechnicianModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [adminRights, setAdminRights] = useState<boolean>(false);
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
              onChange={e => {
                if (!e.target.checked) {
                  // set function
                  setAdminRights(true);
                }
              }}
            />
      ),
      header: "ist Admin"
    }),
    columnHelper.accessor('handwerksbetrieb', {
      cell: info => (
        <Button variant="trash" onClick={() => setDeleteModal(true)}><i className="icon-trash"><BsTrash3 /></i></Button>
      ),
      header: "Aktionen"
    })
  ]

  return (
    <section className="benutzer">

      <SharedModal show={technicianModal} modalContent={<TechnicianModal />} onHide={() => setTechnicianModal(false)} />
      <SharedModal show={deleteModal} modalContent={<DeleteUserModal />} onHide={() => setDeleteModal(false)} />
      <SharedModal show={adminRights} modalContent={<AdminRightsModal />} onHide={() => setAdminRights(false)} />

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
            <Button onClick={() => setTechnicianModal(true)}>Servicetechniker einladen</Button>
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

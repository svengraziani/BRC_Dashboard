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

function InvitationSentModal({setInvitationModal} : {setInvitationModal : Dispatch<SetStateAction<boolean>>}) {
  return (
    <Modal.Body>
      <h2>Einladung wurde versendet</h2>
      <Button onClick={()=> setInvitationModal(false)}>OK</Button>
    </Modal.Body>
  )
}

function TechnicianModal({setInvitationModal, setTechnicianModal}: {setInvitationModal : Dispatch<SetStateAction<boolean>>; setTechnicianModal: Dispatch<SetStateAction<boolean>>}) {
  return (
    <div>
    <Modal.Body>
      <h2>Laden Sie einen Servicetechniker ein</h2>
      <Form>
        <Form.Group className="form-block">
          <Form.Control type='email' placeholder="E-Mail" />
          <Form.Label>E-Mail</Form.Label>
        </Form.Group>
        <Button onClick={() => {
          setTechnicianModal(false)
          setInvitationModal(true)
        }}>Einladen</Button>
      </Form>
    </Modal.Body>
    </div>
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

function AdminRightsModal({grantAdminAccess, setAdminRights}: {grantAdminAccess: string, setAdminRights: any}) {
  return (
    <Modal.Body>
      <i className="icon-question"><FaQuestion /></i>
      <h2>{grantAdminAccess === "Add"? "Adminrechte hinzufügen" : "Adminrechte entfernen"}</h2>
      <p>{grantAdminAccess === "Add" ? "Sind Sie sicher, dass sie dem User Adminrechte verleihen möchten?" : "Sind Sie sicher, dass sie dem User Adminrechte entziehen möchten?"}</p>
      <Button onClick={()=> {setAdminRights(false)}}>{grantAdminAccess === "Add" ? "Ja, Adminrechte hinzufügen" : "Ja, Adminrechte entfernen"}</Button>
    </Modal.Body>
  )
}

function Benutzer() {
  const [technicianModal, setTechnicianModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [adminRights, setAdminRights] = useState<boolean>(false);
  const [invitationModal, setInvitationModal] = useState<boolean>(false);

  const [grantAdminAccess, setGrantAdminAccess] = useState<"Add" | "Remove">("Add")

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
                // if (!e.target.checked) {
                  // set function
                  setGrantAdminAccess(e.target.checked ? "Add" : "Remove")
                  setAdminRights(true);
                // }
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
    <>
      <Header />
      <section className="dashboard benutzer">

        <SharedModal show={technicianModal} modalContent={<TechnicianModal setInvitationModal={setInvitationModal} setTechnicianModal={setTechnicianModal} />} onHide={() => setTechnicianModal(false)} />
        <SharedModal show={deleteModal} modalContent={<DeleteUserModal />} onHide={() => setDeleteModal(false)} />
        <SharedModal show={adminRights} modalContent={<AdminRightsModal grantAdminAccess={grantAdminAccess} setAdminRights={setAdminRights} />} onHide={() => setAdminRights(false)} />
        <SharedModal show={invitationModal} modalContent={<InvitationSentModal setInvitationModal={setInvitationModal} />} onHide={() => setInvitationModal(false)} />

          <Sidebar />
          <div className="dashboard-right">
            <Row className="heading-wrap">
              <Col md="6">
                <h2><i className="icon-multiuser">
                  <Image src={imgMultiuser} alt="Icon" />
                </i>Benutzer</h2>
              </Col>
              <Col md="6" className="d-flex justify-content-end">
                <Button onClick={() => setTechnicianModal(true)}>Servicetechniker einladen</Button>
              </Col>
            </Row>
            {/* Table Component */}
            <ReactTable data={defaultData} columns={columns} isFiltersWrap={false} />
          </div>
      </section>
    </>
  )
}

export default Benutzer

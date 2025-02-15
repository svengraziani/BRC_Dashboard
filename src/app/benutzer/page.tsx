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
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa6";
import { apiCaller } from "@/services/apiCaller";
import toast, { Toaster } from "react-hot-toast";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingIndicator from "@/shared/Loader";

const inviteUserSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("This field is required")
})

type EmailSchema = {
  email: string;
}

type BenutzerType = {
  additional_address_information: string;
  city: string;
  country: {
    code: string;
    name: string;
  };
  craft_business_roles: {
    craft_business: number;
    pk: number;
    type: string;
    url: string;
    user: number;
  }[];
  craft_businesses: number[];
  email: string;
  email_notifications_enabled: boolean;
  first_name: string;
  full_name: string;
  last_name: string;
  phone: string;
  pk: number;
  postal_code: string;
  street: string;
  street_number: string;
  url: string;
}

function InvitationSentModal({ setInvitationModal }: { setInvitationModal: Dispatch<SetStateAction<boolean>> }) {
  return (
    <Modal.Body>
      <h2>Einladung wurde versendet</h2>
      <Button onClick={() => setInvitationModal(false)}>OK</Button>
    </Modal.Body>
  )
}

function TechnicianModal({ setInvitationModal, setTechnicianModal }: { setInvitationModal: Dispatch<SetStateAction<boolean>>; setTechnicianModal: Dispatch<SetStateAction<boolean>> }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(inviteUserSchema),
  });

  const onSubmit = (data: EmailSchema) => {
    apiCaller.post("/api/v1/user/invite_user/", data)
      .then(response => {
        if (response.status === 204) {
          setTechnicianModal(false)
          setInvitationModal(true)
        }
      })
  }

  return (
    <div>
      <Modal.Body>
        <h2>Laden Sie einen Servicetechniker ein</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="form-block">
            <Form.Control type='email' placeholder="E-Mail" {...register("email")} />
            <Form.Label>E-Mail</Form.Label>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </Form.Group>
          <Button
            type="submit"
          // onClick={() => {
          //   setTechnicianModal(false)
          //   setInvitationModal(true)
          // }}
          >Einladen</Button>
        </Form>
      </Modal.Body>
    </div>
  )
}

function DeleteUserModal({ deleteUserId, getUserData }: any) {
  const deleteUserHandler = () => {

    apiCaller.delete(`/api/v1/user/${deleteUserId}/`)
      .then(response => {
        getUserData()
      })
      .catch(error => {
        toast.error(error.response.data.errors[0].detail)
      })
  }

  return (
    <Modal.Body>
      <i className="icon"><Image src={imgWarn} alt="Icon" /></i>
      <h2>User löschen</h2>
      <p>Sind Sie sicher, dass sie den User löschen möchten?</p>
      <Button onClick={deleteUserHandler}>Ja, User löschen</Button>
    </Modal.Body>
  )
}

function AdminRightsModal({ grantAdminAccess, setAdminRights }: { grantAdminAccess: string, setAdminRights: any }) {
  return (
    <Modal.Body>
      <i className="icon-question"><FaQuestion /></i>
      <h2>{grantAdminAccess === "Add" ? "Adminrechte hinzufügen" : "Adminrechte entfernen"}</h2>
      <p>{grantAdminAccess === "Add" ? "Sind Sie sicher, dass sie dem User Adminrechte verleihen möchten?" : "Sind Sie sicher, dass sie dem User Adminrechte entziehen möchten?"}</p>
      <Button onClick={() => { setAdminRights(false) }}>{grantAdminAccess === "Add" ? "Ja, Adminrechte hinzufügen" : "Ja, Adminrechte entfernen"}</Button>
    </Modal.Body>
  )
}

function Benutzer() {
  const [technicianModal, setTechnicianModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [adminRights, setAdminRights] = useState<boolean>(false);
  const [invitationModal, setInvitationModal] = useState<boolean>(false);
  const [selectedDeleteUser, setSelectedDeleteUser] = useState<number | null>(null)

  const [grantAdminAccess, setGrantAdminAccess] = useState<"Add" | "Remove">("Add")
  const [benutzerData, setBenutzerData] = useState<BenutzerType[]>([])
  const [numberOfRecords, setNumberOfRecords] = useState<number>(0)

  const [isLoading, setIsLoading] = useState(true)

  const columnHelper = createColumnHelper()

  const getUserData = () => {
    setIsLoading(true)

    apiCaller.get("/api/v1/craft-business-role/").then((response) => {
      setNumberOfRecords(response.data.count);

      setBenutzerData(response?.data?.results)

      setIsLoading(false)
    }).catch((error) => { 
      setIsLoading(false)
    })
  }

  console.log(benutzerData , 'benutzerData ');
  

  useEffect(() => {
    getUserData()
  }, [])

  const columns = [
    columnHelper.accessor('full_name', {
      cell: info => info.getValue(),
      header: "Name"
    }),
    columnHelper.accessor('email', {
      cell: info => info.getValue(),
      header: "E-Mail Adresse"
    }),
    columnHelper.accessor('type', {
      cell: info => info.getValue(),
      header: "Role"
    }),
    columnHelper.accessor('nameEigentümer', {
      cell: info => (
        <Form.Check
          type="switch"
          id="custom-switch"
          onChange={e => {
            setGrantAdminAccess(e.target.checked ? "Add" : "Remove")
            setAdminRights(true);
            // }
          }}
        />
      ),
      header: "ist Admin"
    }),
    columnHelper.accessor('handwerksbetrieb', {
      cell: (info: any) => {
        return (
          <Button variant="trash"
            onClick={() => {
              setSelectedDeleteUser(info?.row?.original?.user)
              setDeleteModal(true)
            }}
          >
            <i className="icon-trash"><BsTrash3 /></i>
          </Button>
        );
      },
      header: "Aktionen"
    })
  ]

  return (
    <>
      <Header />
      <section className="dashboard benutzer">

        <SharedModal show={technicianModal} modalContent={<TechnicianModal setInvitationModal={setInvitationModal} setTechnicianModal={setTechnicianModal} />} onHide={() => setTechnicianModal(false)} />
        <SharedModal show={deleteModal} modalContent={<DeleteUserModal deleteUserId={selectedDeleteUser} getUserData={getUserData} />} onHide={() => setDeleteModal(false)} />
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
          <ReactTable data={benutzerData ? benutzerData : []} columns={columns} isFiltersWrap={false} numberOfRecords={numberOfRecords} />
        </div>
      </section>

      {isLoading && <LoadingIndicator />}
      <Toaster />
    </>
  )
}

export default Benutzer

"use client";

import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import "./Informationen.scss";
import Image from "next/image";
import imgLocation from "../../../../Assets/images/icon-allgemeine.svg";
import imgNotice from "../../../../Assets/images/icon-notizen.svg";
import imgDatabase from "../../../../Assets/images/icon-database.svg";
import imgEigent from "../../../../Assets/images/icon-eigentuemer.svg";
import imgUser from "../../../../Assets/images/icon-multipleuser.svg";
import circleImg from "../../../../Assets/images/icon-circle.svg";
import { BsTrash3 } from "react-icons/bs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SharedModal from "@/shared/Modal";
import { COUNTRY_LIST } from "@/services/constants";
import { apiCaller } from "@/services/apiCaller";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import LoadingIndicator from "@/shared/Loader";

function InviteAccessModal({ setInvitationModal }: any) {
  const [inviteModal, setInviteModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("")

  const { id } = useParams()

  const onSubmit = (e: any) => {
    e.preventDefault()

    const obj = {
      email: email,
      role_type: "VIEWER"
    }

    apiCaller.put(`/api/v1/facility/${id}/invite_user/`, obj)
      .then(response => {
        setInviteModal(true)
      })
      .catch(error => {
        toast.error(error.response.data.errors[0].detail)
      })
  }

  return (
    <>
      <SharedModal
        show={inviteModal}
        modalContent={<InviteSendModal setInviteModal={setInviteModal} setInvitationModal={setInvitationModal} />}
        onHide={() => setInviteModal(false)}
      />
      <Modal.Body>
        <h2>Laden Sie einen Zugriffsberechtigten ein</h2>
        <Form>
          <Form.Group className="form-block">
            <Form.Control type="email" placeholder="E-Mail" onChange={e => setEmail(e.target.value)} value={email} />
            <Form.Label>E-Mail</Form.Label>
          </Form.Group>
          <Button onClick={onSubmit}>Einladen</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

function InviteSendModal({ setInviteModal, setInvitationModal }: any) {
  return (
    <Modal.Body>
      <h2>Einladung wurde versendet</h2>
      <Button onClick={() => {
        setInviteModal(false)
        setInvitationModal(false)
      }}>OK</Button>
    </Modal.Body>
  );
}

type Facility = {
  facility: number;
  pk: number;
  type: 'OWNER' | 'VIEWER';
  url: string;
  user: number;
}

function Informationen({
  isDashboardDetail,
  generalInformationHandler,
  register,
  handleSubmit,
  errors,
  setDataDepositCheck,
  dataDepositCheck,
  setValue,
  informationLoading
}: any) {
  const [invitationModal, setInvitationModal] = useState<boolean>(false);

  const [facilityOwnerRole, setFacilityOwnerRole] = useState<Facility[]>([])
  const [facilityUserRole, setFacilityUserRole] = useState<Facility[]>([])
  const [facilityOwnerInfo, setFacilityOwnerInfo] = useState<any>()
  const [facilityUserInfo, setFacilityUserInfo] = useState<any>([])

  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      setIsLoading(true)

      apiCaller.get(`/api/v1/facilityrole/?facility=${id}`)
      .then(response => {
        let owner = response.data.results.filter((item: any) => {
          return item.type === "OWNER"
        })

        let user = response.data.results.filter((item: any) => {
          return item.type === "VIEWER"
        })

        setFacilityOwnerRole(owner);
        setFacilityUserRole(user)

        setIsLoading(false)
      })
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)

    if (facilityOwnerRole.length > 0) {
      apiCaller.get(`/api/v1/user/${facilityOwnerRole[0].user}/`)
        .then(response => {
          setFacilityOwnerInfo(response.data)
        })

        setIsLoading(false)
    }

    if (facilityUserRole.length > 0) {
      facilityUserRole.map(item => {
        apiCaller.get(`/api/v1/user/${item.user}/`)
          .then((response: any) => {
            setFacilityUserInfo([...facilityUserInfo, response.data])
          })
      })

      setIsLoading(false)
    }
  }, [facilityOwnerRole, facilityUserRole])

  const onSubmit = (formData: any) => {
    generalInformationHandler(formData);
  };

  return (
    <Form onSubmit={handleSubmit ? handleSubmit(onSubmit) : ""}>
      <div className="informationen">
        {isDashboardDetail && <span className="fields">* Pflichtfelder</span>}

        <SharedModal
          show={invitationModal}
          modalContent={<InviteAccessModal setInvitationModal={setInvitationModal} />}
          onHide={() => setInvitationModal(false)}
        />

        {/* General Information */}
        <Row className="primary-block">
          <Col md="8">
            <h2>
              <i className="icon-head">
                <Image src={imgLocation} alt="Icon" />
              </i>
              Allgemeine Angaben
            </h2>
            <div className="general-card">
              <Row>
                <Col md="6">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="text"
                      placeholder="Anlagename"
                      {...register("name", { required: true })}
                    />
                    <Form.Label>Anlagename</Form.Label>
                    {errors.name && (
                      <div className="error-message">
                        {errors.name.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="text"
                      placeholder="Alias-Name"
                      {...register("alias_name", { required: true })}
                    />
                    <Form.Label>Alias-Name</Form.Label>
                    {errors.alias_name && (
                      <div className="error-message">
                        {errors.alias_name.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="text"
                      placeholder="Standort: Straße"
                      {...register("street", { required: true })}
                    />
                    <Form.Label>Standort: Straße</Form.Label>
                    {errors.street && (
                      <div className="error-message">
                        {errors.street.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md="6" className="d-md-flex">
                  <Col md="5" style={{ paddingRight: "10px" }}>
                    <Form.Group className="form-block">
                      <Form.Control
                        type="number"
                        placeholder="Standort: Straße Nr."
                        {...register("street_number")}
                      />
                      <Form.Label>Standort: Straße Nr.</Form.Label>
                      {errors.street_number && (
                        <div className="error-message">
                          {errors.street_number.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="7" style={{ paddingLeft: "10px" }}>
                    <Form.Group className="form-block">
                      <Form.Control
                        type="text"
                        placeholder="Adresszusatz"
                        {...register("additional_address_information", { required: true })}
                      />
                      <Form.Label>Adresszusatz</Form.Label>
                      {errors.additional_address_information && (
                        <div className="error-message">
                          {errors.additional_address_information.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="number"
                      placeholder="Standort: PLZ"
                      {...register("postal_code", { required: true })}
                    />
                    <Form.Label>Standort: PLZ</Form.Label>
                    {errors.postal_code && (
                      <div className="error-message">
                        {errors.postal_code.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="text"
                      placeholder="Standort: Ort"
                      {...register("city", { required: true })}
                    />
                    <Form.Label>Standort: Ort</Form.Label>
                    {errors.city && (
                      <div className="error-message">
                        {errors.city.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Group className="form-block mb-0">
                    <Form.Select aria-label="Dropdown" {...register("country")} onChange={e => {
                      if (e.target.value !== "Standort: Land") {
                        setValue("country", e.target.value)
                      } else {
                        setValue("country", null)
                      }
                    }}>
                      <option>Standort: Land</option>
                      {COUNTRY_LIST.map((item, key) => (
                        <option key={key} value={item.code}>{item.name}</option>
                      ))}
                    </Form.Select>
                    {errors.country && (
                      <div className="error-message">
                        {errors.country.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md="4" className="d-flex flex-column">
            <h2>
              <i className="icon-notice">
                <Image src={imgNotice} alt="Icon" />
              </i>
              Notizen
            </h2>
            <div className="general-card h-100">
              <div className="sub-card h-100">
                <textarea className="notice-textarea" spellCheck={false} placeholder="Schreiben Sie Ihre Notiz" {...register("notes")}>
                </textarea>
              </div>
            </div>
          </Col>
        </Row>
        {/* Owner facility */}
        <div className="primary-block">
          <h2>
            <i className="icon-head">
              <Image src={imgEigent} alt="Icon" />
            </i>
            Eigentümer Anlage
          </h2>
          <div className="general-card">
            {!isDashboardDetail && (
              <Row>
                <Col md="4">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="text"
                      placeholder="Vorname"
                      disabled={facilityOwnerRole.length !== 0 ? true : false}
                      value={facilityOwnerInfo && facilityOwnerInfo.first_name}
                    />
                    <Form.Label>Vorname</Form.Label>
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="text"
                      placeholder="Nachname"
                      disabled={facilityOwnerRole.length !== 0 ? true : false}
                      value={facilityOwnerInfo && facilityOwnerInfo.last_name}
                    />
                    <Form.Label>Nachname</Form.Label>
                  </Form.Group>
                </Col>

                <Col md={isDashboardDetail ? "6" : "4"} className={isDashboardDetail ? "mb-0" : ""}>
                  <Form.Group className={isDashboardDetail ? "form-block mb-0" : "form-block"}>
                    <Form.Control
                      type="email"
                      placeholder="E-Mail"
                      disabled={facilityOwnerRole.length !== 0 ? true : false}
                      value={facilityOwnerInfo && facilityOwnerInfo.email}
                    />
                    <Form.Label>E-Mail</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
            )}

            {isDashboardDetail && (
              <Row>
                <Col md='6'>
                  <Form.Group className="form-block">
                    <Form.Control
                      type="number"
                      placeholder="Auftragsnummer"
                      {...register("order_number")}
                    />
                    <Form.Label>Auftragsnummer</Form.Label>
                    <p className="error-message">{errors.order_number && errors.order_number.message}</p>
                  </Form.Group>
                </Col>

                <Col md='6'></Col>
              </Row>
            )}
          </div>
        </div>

        {(!isDashboardDetail && facilityOwnerRole.length === 0) && (
          <Button onClick={() => setInvitationModal(true)} style={{ marginBottom: "20px", marginTop: "-10px" }}>
            Besitzer hinzufügen
          </Button>
        )}

        {/* Checkbox */}
        {isDashboardDetail && (
          <Row className="data-deposite">
            <Col xs>
              <Form.Check
                type={"checkbox"}
                id={`einzelaccount`}
                label={"Eigentümer hat der Datenhinterlegung zugestimmt*"}
                // {...register("einzelaccountCheckBox")}
                checked={dataDepositCheck}
                onChange={e => {
                  setDataDepositCheck(e.target.checked)
                }}
              />
            </Col>
          </Row>
        )}

        {/* Electricity purchase */}
        <div className="primary-block">
          <h2>
            <i className="icon-head">
              <Image src={imgDatabase} alt="Icon" />
            </i>
            Strombezug
            {isDashboardDetail && (
              <i className="icon-heade">
                <Image src={circleImg} alt="Icon" />
              </i>
            )}
          </h2>
          <div className="general-card">
            <Row>
              <Col xs>
                <Form.Group className="form-block mb-0">
                  <Form.Control
                    type="number"
                    placeholder="Kosten in €"
                    {...register("power_purchase_costs", { required: true })}
                  />
                  <Form.Label>Kosten in €</Form.Label>
                  {errors.power_purchase_costs && (
                    <div className="error-message">{errors.power_purchase_costs.message}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>

        {/* Access rights */}
        {!isDashboardDetail && (
          <div className="primary-block">
            <h2>
              <i className="icon-head">
                <Image src={imgUser} alt="Icon" />
              </i>
              Zugriffsrechte
            </h2>

            {facilityUserInfo.map((item: any, key: number) => {
              return (
                <div className="general-card mb-3" key={key}>
                  <Row>
                    <Col md="10" className="d-md-flex gap-4">
                      <Col md="4">
                        <Form.Group className="form-block mb-0">
                          <Form.Control
                            type="text"
                            placeholder="Vorname"
                            value={item.first_name}
                            disabled
                          />
                          <Form.Label>Vorname</Form.Label>
                        </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group className="form-block mb-0">
                          <Form.Control
                            type="text"
                            placeholder="Nachname"
                            value={item.last_name}
                            disabled
                          />
                          <Form.Label>Nachname</Form.Label>
                        </Form.Group>
                      </Col>
                      <Col md="4">
                        <Form.Group className="form-block mb-0">
                          <Form.Control
                            type="email"
                            placeholder="E-Mail"
                            value={item.email}
                            disabled
                          />
                          <Form.Label>E-Mail</Form.Label>
                        </Form.Group>
                      </Col>
                    </Col>
                    <Col md="2" className="d-flex justify-content-end">
                      <Button variant="trash">
                        <i className="icon-trash">
                          <BsTrash3 />
                        </i>
                      </Button>
                    </Col>
                  </Row>
                </div>
              )
            })}
          </div>
        )}

        {!isDashboardDetail && (
          <Button onClick={() => setInvitationModal(true)}>
            User hinzufügen
          </Button>
        )}
      </div>

      <Toaster />

      {(informationLoading || isLoading) && <LoadingIndicator />}
    </Form>
  );
}

export default Informationen;

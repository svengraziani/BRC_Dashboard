"use client";

import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import "./Informationen.scss";
import Image from "next/image";
import imgLocation from "../../../../Assets/images/icon-allgemeine.svg";
import imgNotice from "../../../../Assets/images/icon-notizen.svg";
import imgTools from "../../../../Assets/images/icon-tools.svg";
import imgDatabase from "../../../../Assets/images/icon-database.svg";
import imgEigent from "../../../../Assets/images/icon-eigentuemer.svg";
import imgUser from "../../../../Assets/images/icon-multipleuser.svg";
import circleImg from "../../../../Assets/images/icon-circle.svg";
import { BsTrash3 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SharedModal from "@/shared/Modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  anlagename: yup.string().required("Anlagename is required"),
  aliasname: yup.string().required("Alias-Name is required"),
  street: yup.string().required("Street is required"),
  streetNumber: yup.string().required("Street Number is required"),
  addressAddon: yup.string(), // Optional field, no required validation
  zipcode: yup.string().required("Zipcode is required"),
  location: yup.string().required("Location is required"),
  country: yup.string().required("Country is required"),
  einzelaccountCheckBox: yup.string(),
  // Define validation rules for other fields
  firmenname: yup.string().required("Firmenname is required"),
  vorname: yup.string().required("Vorname is required"),
  nachname: yup.string().required("Nachname is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  telefonnummer: yup.string().required("Telefonnummer is required"),
  auftragsnummer: yup.string().required("Auftragsnummer is required"),
  plz: yup.string().required("PLZ is required"),
  ort: yup.string().required("Ort is required"),
  land: yup.string().required("Land is required"),
  firmenname1: yup.string().required("Firmenname is required"),
  telefonnummer1: yup.string().required("Telefonnummer is required"),
  telefonnummer2: yup.string().required("Telefonnummer is required"),
  vorname1: yup.string().required("Vorname is required"),
  nachname1: yup.string().required("Nachname is required"),
  kosten: yup.string().required("Kosten is required"),
  vorname3: yup.string().required("Vorname is required"),
  nachname2: yup.string().required("Nachname is required"),
  email1: yup.string().email("Invalid email").required("Email is required"),
  vorname4: yup.string().required("Vorname is required"),
  nachname4: yup.string().required("Nachname is required"),
  email4: yup.string().email("Invalid email").required("Email is required"),
});

function InviteAccessModal() {
  const [inviteModal, setInviteModal] = useState<boolean>(false);

  return (
    <>
      <SharedModal
        show={inviteModal}
        modalContent={<InviteSendModal />}
        onHide={() => setInviteModal(false)}
      />
      <Modal.Body>
        <h2>Laden Sie einen Zugriffsberechtigten ein</h2>
        <Form>
          <Form.Group className="form-block">
            <Form.Control type="email" placeholder="E-Mail" />
            <Form.Label>E-Mail</Form.Label>
          </Form.Group>
          <Button onClick={() => setInviteModal(true)}>Einladen</Button>
        </Form>
      </Modal.Body>
    </>
  );
}

function InviteSendModal() {
  return (
    <Modal.Body>
      <h2>Einladung wurde versendet</h2>
      <Button>OK</Button>
    </Modal.Body>
  );
}

function Informationen({
  isDashboardDetail,
  generalInformationHandler,
  register,
  handleSubmit,
  errors
}: any) {
  const [invitationModal, setInvitationModal] = useState<boolean>(false);

  const onSubmit = (formData: any) => {
    generalInformationHandler(formData);
  };
  
  return (
    <Form onSubmit={handleSubmit ? handleSubmit(onSubmit) : ""}>
      <div className="informationen">
        {isDashboardDetail && <span className="fields">* Pflichtfelder</span>}

        <SharedModal
          show={invitationModal}
          modalContent={<InviteAccessModal />}
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
                      {...register("anlagename", { required: true })}
                    />
                    <Form.Label>Anlagename</Form.Label>
                    {errors.anlagename && (
                      <div className="error-message">
                        {errors.anlagename.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="text"
                      placeholder="Alias-Name"
                      {...register("aliasname", { required: true })}
                    />
                    <Form.Label>Alias-Name</Form.Label>
                    {errors.aliasname && (
                      <div className="error-message">
                        {errors.aliasname.message}
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
                        {...register("streetNumber")}
                      />
                      <Form.Label>Standort: Straße Nr.</Form.Label>
                      {errors.streetNumber && (
                        <div className="error-message">
                          {errors.streetNumber.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="7" style={{ paddingLeft: "10px" }}>
                    <Form.Group className="form-block">
                      <Form.Control
                        type="text"
                        placeholder="Adresszusatz"
                        {...register("addressAddon")}
                      />
                      <Form.Label>Adresszusatz</Form.Label>
                      {errors.addressAddon && (
                        <div className="error-message">
                          {errors.addressAddon.message}
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
                      type="text"
                      placeholder="Standort: PLZ"
                      {...register("zipcode", { required: true })}
                    />
                    <Form.Label>Standort: PLZ</Form.Label>
                    {errors.zipcode && (
                      <div className="error-message">
                        {errors.zipcode.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="form-block">
                    <Form.Control
                      type="text"
                      placeholder="Standort: Ort"
                      {...register("location", { required: true })}
                    />
                    <Form.Label>Standort: Ort</Form.Label>
                    {errors.location && (
                      <div className="error-message">
                        {errors.location.message}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Group className="form-block mb-0">
                    <Form.Select aria-label="Dropdown" {...register("country",{ required: true })}>
                      <option>Standort: Land</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Brazil">Brazil</option>
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
                <p>
                  Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle
                  Buchstaben da sind und wie sie aussehen. Manchmal benutzt man
                  Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um
                  Schriften zu testen.
                </p>
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
            {!isDashboardDetail &&(
            <Row>
            <Col md="4">
                <Form.Group className="form-block">
                  <Form.Control
                    type="text"
                    placeholder="Vorname"
                    {...register("vorname", { required: true })}
                  />
                  <Form.Label>Vorname</Form.Label>
                  {errors.vorname && (
                    <div className="error-message">
                      {errors.vorname.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md="4">
                <Form.Group className="form-block">
                  <Form.Control
                    type="text"
                    placeholder="Nachname"
                    {...register("nachname", { required: true })}
                  />
                  <Form.Label>Nachname</Form.Label>
                  {errors.nachname && (
                    <div className="error-message">
                      {errors.nachname.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            )}
            <Row>
            {!isDashboardDetail &&(
              <Col md="4">
              <Form.Group className="form-block">
                <Form.Control
                  type="tel"
                  placeholder="Telefonnummer"
                  {...register("telefonnummer", { required: true })}
                />
                <Form.Label>Telefonnummer</Form.Label>
                {errors.telefonnummer && (
                  <div className="error-message">
                    {errors.telefonnummer.message}
                  </div>
                )}
              </Form.Group>
            </Col>
            )}
              <Col md={isDashboardDetail ? "6" : "4"} className={isDashboardDetail ? "mb-0" : ""}>
                <Form.Group className={isDashboardDetail ? "form-block mb-0" : "form-block"}>
                  <Form.Control
                    type="email"
                    placeholder="E-Mail"
                    {...register("email", { required: true })}
                  />
                  <Form.Label>E-Mail</Form.Label>
                  {errors.email && (
                    <div className="error-message">{errors.email.message}</div>
                  )}
                </Form.Group>
              </Col>
              <Col md={isDashboardDetail ? "6" : "4"} className={isDashboardDetail ? "mb-0" : ""}>
                <Form.Group className={isDashboardDetail ? "form-block mb-0" : "form-block"}>
                  <Form.Control
                    type="number"
                    placeholder="Auftragsnummer"
                    {...register("auftragsnummer", { required: true })}
                  />
                  <Form.Label>Auftragsnummer</Form.Label>
                  {errors.auftragsnummer && (
                    <div className="error-message">
                      {errors.auftragsnummer.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>
        {/* Checkbox */}
        {isDashboardDetail && (
          <Row className="data-deposite">
            <Col xs>
              <Form.Check
                type={"checkbox"}
                id={`einzelaccount`}
                label={"Eigentümer hat der Datenhinterlegung zugestimmt*"}
                {...register("einzelaccountCheckBox")}
              />
            </Col>
          </Row>
        )}
        {/* Craft business */}
        <div className="primary-block">
          <h2>
            <i className="icon-head">
              <Image src={imgTools} alt="Icon" />
            </i>
            Handwerksbetrieb
          </h2>
          <div className="general-card">
            <Row>
              <Col md="4">
                <Form.Group className="form-block">
                  <Form.Control
                    type="text"
                    placeholder="Firmenname"
                    {...register("firmenname1", { required: true })}
                  />
                  <Form.Label>Firmenname</Form.Label>
                  {errors.firmenname1 && (
                    <div className="error-message">
                      {errors.firmenname1.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md="4">
                <Form.Group className="form-block">
                  <Form.Control
                    type="tel"
                    placeholder="Telefonnummer"
                    {...register("telefonnummer1", { required: true })}
                  />
                  <Form.Label>Telefonnummer</Form.Label>
                  {errors.telefonnummer1 && (
                    <div className="error-message">
                      {errors.telefonnummer1.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md="4">
                <Form.Group className="form-block">
                  <Form.Control
                    type="tel"
                    placeholder="Telefonnummer"
                    {...register("telefonnummer2", { required: true })}
                  />
                  <Form.Label>Telefonnummer</Form.Label>
                  {errors.telefonnummer2 && (
                    <div className="error-message">
                      {errors.telefonnummer2.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Group className="form-block mb-0">
                  <Form.Control
                    type="text"
                    placeholder="Vorname"
                    {...register("vorname1", { required: true })}
                  />
                  <Form.Label>Vorname</Form.Label>
                  {errors.vorname1 && (
                    <div className="error-message">
                      {errors.vorname1.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col md="4">
                <Form.Group className="form-block mb-0">
                  <Form.Control
                    type="text"
                    placeholder="Nachname"
                    {...register("nachname1", { required: true })}
                  />
                  <Form.Label>Nachname</Form.Label>
                  {errors.nachname1 && (
                    <div className="error-message">
                      {errors.nachname1.message}
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>
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
                    {...register("kosten", { required: true })}
                  />
                  <Form.Label>Kosten in €</Form.Label>
                  {errors.kosten && (
                    <div className="error-message">{errors.kosten.message}</div>
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
            <div className="general-card mb-3">
              <Row>
                <Col md="10" className="d-md-flex gap-4">
                  <Col md="4">
                    <Form.Group className="form-block mb-0">
                      <Form.Control
                        type="text"
                        placeholder="Vorname"
                        {...register("vorname3", { required: true })}
                      />
                      <Form.Label>Vorname</Form.Label>
                      {errors.vorname3 && (
                        <div className="error-message">
                          {errors.vorname3.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="4">
                    <Form.Group className="form-block mb-0">
                      <Form.Control
                        type="text"
                        placeholder="Nachname"
                        {...register("nachname2", { required: true })}
                      />
                      <Form.Label>Nachname</Form.Label>
                      {errors.nachname2 && (
                        <div className="error-message">
                          {errors.nachname2.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="4">
                    <Form.Group className="form-block mb-0">
                      <Form.Control
                        type="email"
                        placeholder="E-Mail"
                        {...register("email1", { required: true })}
                      />
                      <Form.Label>E-Mail</Form.Label>
                      {errors.email1 && (
                        <div className="error-message">
                          {errors.email1.message}
                        </div>
                      )}
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
            <div className="general-card">
              <Row>
                <Col md="10" className="d-md-flex gap-4">
                  <Col md="4">
                    <Form.Group className="form-block mb-0">
                      <Form.Control
                        type="text"
                        placeholder="Vorname"
                        {...register("vorname4", { required: true })}
                      />
                      <Form.Label>Vorname</Form.Label>
                      {errors.vorname4 && (
                        <div className="error-message">
                          {errors.vorname4.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="4">
                    <Form.Group className="form-block mb-0">
                      <Form.Control
                        type="text"
                        placeholder="Nachname"
                        {...register("nachname4", { required: true })}
                      />
                      <Form.Label>Nachname</Form.Label>
                      {errors.nachname4 && (
                        <div className="error-message">
                          {errors.nachname4.message}
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="4">
                    <Form.Group className="form-block mb-0">
                      <Form.Control
                        type="email"
                        placeholder="E-Mail"
                        {...register("email4", { required: true })}
                      />
                      <Form.Label>E-Mail</Form.Label>
                      {errors.email4 && (
                        <div className="error-message">
                          {errors.email4.message}
                        </div>
                      )}
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
          </div>
        )}
        {!isDashboardDetail && (
          <Button onClick={() => setInvitationModal(true)}>
            User hinzufügen
          </Button>
        )}
      </div>
    </Form>
  );
}

export default Informationen;

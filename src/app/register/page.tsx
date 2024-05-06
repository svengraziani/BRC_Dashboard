"use client";

import Image from "next/image";
import arrowImg from '../../Assets/images/icon-back.svg';
import sectionImg from "../../Assets/images/section-logo.png";
import backgroundImage from '../../Assets/images/background.jpg';
import Link from "next/link";
import "./register.scss";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { useSearchParams, useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "../../services/genericFunctions";
import { FormEvent, useState } from "react";
import SharedModal from "@/shared/Modal";

function CompleteRegistartionModal() {
  const router = useRouter();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    router.push("/placeholderpath");
  }

  return (
    <Modal.Body>
      <h2>Registrierung abschließen</h2>
      <p>Bitte prüfen Sie Ihre E-Mails. Wir haben Ihnen eine E-Mail mit einem Link für die Passwortvergabe 
      gesendet. Damit können Sie die Registrierung abschließen.</p>
        <Button onClick={submitHandler}>OK</Button>
    </Modal.Body>
  )
}

export default function Register() {
  const searchParams = useSearchParams();
  const query = searchParams.get("regis");
  const [registrationModal, setRegistrationModal] = useState<boolean>(false);

  // const router = useRouter();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegistrationModal(true);
  }

  return (
    <section className="form-bg register">
      <Image
        alt="backgroun-image"
        src={backgroundImage}
        placeholder="blur"
        fill
        quality={100}
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: "-1"
        }}
      />
      <div className="section-logo">
        <Image src={sectionImg} alt="Section-Logo" />
      </div>

      <SharedModal show={registrationModal} modalContent={<CompleteRegistartionModal />} onHide={() => setRegistrationModal(false)} />

      <div className="form-wrap register-form">
        <Row>
          <Col xs>
          <div className="back-btn">
            <Link href={"/login"} className="d-flex align-items-center my-0">
              <i className="icon-back">
              <Image src={arrowImg} alt="arrow-image"></Image>
              </i>Zurück zum Login</Link>
            </div>
          </Col>
        </Row>
        <h2>Registrierung {capitalizeFirstLetter(query ? query : "")}</h2>
        <Form onSubmit={submitHandler} className="my-0">
          {query === "unternehmensaccount" && (
            <Row>
            <Col md="12">
              <Form.Group className="form-block">
                <Form.Control type="text" placeholder="Firmenname*" spellCheck={false} />
                <Form.Label>Firmenname*</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          )}

          <Row>
            <Col md="6">
              <Form.Group className="form-block">
                <Form.Control type="text" placeholder="Vorname*" spellCheck={false} />
                <Form.Label>Vorname*</Form.Label>
              </Form.Group>
            </Col>
            <Col md="6">
              <Form.Group className="form-block">
                <Form.Control type="text" placeholder="Nachname*" spellCheck={false} />
                <Form.Label>Nachname*</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Form.Group className="form-block">
                <Form.Control type="text" placeholder="Straße*" spellCheck={false} />
                <Form.Label>Straße*</Form.Label>
              </Form.Group>
            </Col>
            <Col md="6">
              <Row>
                <Col md="4">
                  <Form.Group className="form-block">
                    <Form.Control type="number" placeholder="Nr.*" spellCheck={false} />
                    <Form.Label>Nr.*</Form.Label>
                  </Form.Group>
                </Col>
                <Col md="8">
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Adresszusatz" spellCheck={false} />
                    <Form.Label>Adresszusatz</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Form.Group className="form-block">
                <Form.Control type="number" placeholder="PLZ*" spellCheck={false} />
                <Form.Label>PLZ*</Form.Label>
              </Form.Group>
            </Col>
            <Col md="6">
              <Form.Group className="form-block">
                <Form.Control type="text" placeholder="Ort*" spellCheck={false} />
                <Form.Label>Ort*</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Form.Group className="form-block">
                <Form.Select aria-label="Dropdown">
                  <option>Land*</option>
                  <option value="India">India</option>
                  <option value="Russia">Russia</option>
                  <option value="Brazil">Brazil</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md="6">
              <Form.Group className="form-block">
                <Form.Control type="tel" placeholder="Telefonnummer*" spellCheck={false} />
                <Form.Label>Telefonnummer*</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs>
              <Form.Group className="form-block">
                <Form.Control type="email" placeholder="E-Mail*" spellCheck={false}></Form.Control>
                <Form.Label>E-Mail*</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <h3>* Pflichtfelder</h3>
          <Row>
            <Col md="6">
              <Form.Check
                type={"checkbox"}
                name={"registration"}
                id={`einzelaccount`}
                label={<div className="conditions d-flex"><Link href="#">Nutzungsbedingungen</Link>
                  <span>akzeptieren*</span></div>} />
            </Col>
            <Col md="6">
              <Form.Check
                type={"checkbox"}
                name={"registration"}
                id={`datenschutzerklärung`}
                label={<div className="conditions d-flex"><Link href="#">Datenschutzerklärung</Link>
                  <span>akzeptieren*</span></div>} />
            </Col>
          </Row>
          <Button type="submit">Registrieren</Button>
        </Form>
      </div>
    </section>
  )
}
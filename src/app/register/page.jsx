"use client";

import Image from "next/image";
import arrowImg from '../../assets/images/icon-back.svg';
import sectionImg from "../../Assets/images/section-logo.png";
import backgroundImage from '../../Assets/images/background.jpg';
import Link from "next/link";
import "./register.scss";
import { Button, Row, Col, Form } from "react-bootstrap";

export default function Register() {
  return(
    <section className="form-bg register">
    <Image
      alt="backgroun-image"
      src={backgroundImage}
      placeholder="blur"
      fill
      quality={100}
      sizes="100vw"
      style={{
        objectFit:"cover",
        zIndex:"-1"
      }}
    />
      <div className="section-logo">
            <Image src={sectionImg} alt="Section-Logo" />
      </div>
      <div className="form-wrap register-form">
            <Row>
            <Link href={"/signup"} style={{display: "flex", gap: "5px", alignItems: "center"}}><i className="icon-back">
              <Image src={arrowImg} alt="Icon" />
              </i>Zurück zum Login</Link>
            </Row>
            <h2>Registrierung Einzelaccount</h2>
              <Form>
                  <Row>
                      <Col md="6">
                          <Form.Group className="form-block">
                              <Form.Control type="text" placeholder="Vorname*" />
                              <Form.Label>Vorname*</Form.Label>
                          </Form.Group>
                      </Col>
                      <Col md="6">
                        <Form.Group className="form-block">
                              <Form.Control type="text" placeholder="Nachname*" />
                              <Form.Label>Nachname*</Form.Label>
                          </Form.Group>
                      </Col>
                  </Row>
                  <Row>
                      <Col md="6">
                          <Form.Group className="form-block">
                              <Form.Control type="text" placeholder="Straße*" />
                              <Form.Label>Straße*</Form.Label>
                          </Form.Group>
                      </Col>
                      <Col md="6">
                        <Row>
                        <Col md="4">
                        <Form.Group className="form-block">
                              <Form.Control type="number" placeholder="Nr.*" />
                              <Form.Label>Nr.*</Form.Label>
                        </Form.Group>
                        </Col>
                        <Col md="8">
                        <Form.Group className="form-block">
                              <Form.Control type="text" placeholder="Adresszusatz" />
                              <Form.Label>Adresszusatz</Form.Label>
                        </Form.Group>
                        </Col>
                        </Row>
                      </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                        <Form.Group className="form-block">
                              <Form.Control type="number" placeholder="PLZ*" />
                              <Form.Label>PLZ*</Form.Label>
                          </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group className="form-block">
                              <Form.Control type="text" placeholder="Ort*" />
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
                              <Form.Control type="tel" placeholder="Telefonnummer*" />
                              <Form.Label>Telefonnummer*</Form.Label>
                          </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs>
                      <Form.Group className="form-block">
                        <Form.Control type="email" placeholder="E-Mail*"></Form.Control>
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
                label={<div style={{display: "flex", gap: "5px"}}><Link href="#">Nutzungsbedingungen</Link> 
                <span>akzeptieren*</span></div>} />
                </Col>
                <Col md="6">
                <Form.Check
                type={"checkbox"}
                name={"registration"}
                id={`datenschutzerklärung`}
                label={<div style={{display: "flex", gap: "5px"}}><Link href="#">Datenschutzerklärung</Link> 
                <span>akzeptieren*</span></div>} />
                </Col>
              </Row>
                  <Button type="submit">Registrieren</Button>
              </Form>
      </div>
    </section>
  )
}
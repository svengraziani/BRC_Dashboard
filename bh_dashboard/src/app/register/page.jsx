"use client";

import Link from "next/link";
import "./register.scss";
import "../../css/sass/global.scss";
import Form from 'react-bootstrap/Form';
import { Button, Row, Col } from "react-bootstrap";

export default function Register() {
  return(
    <section className="form-bg">
      <div className="form-wrap register-form">
            <Row>
            <Link href={"/login"}><i className="icon-back"></i>Zurück zum Login</Link>
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
                              <Form.Control type="text" placeholder="Nr.*" />
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
                              <Form.Control type="text" placeholder="PLZ*" />
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
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                          </Form.Group>
                    </Col>
                    <Col md="6">
                        <Form.Group className="form-block">
                              <Form.Control type="text" placeholder="Telefonnummer*" />
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
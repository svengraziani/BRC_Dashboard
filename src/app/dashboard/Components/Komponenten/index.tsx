"use client";

import Image from "next/image";
import imgSpeicher from '../../../../Assets/images/icon-speicher.svg';
import imgWallbox from '../../../../Assets/images/icon-wallbox.svg';
import imgWech from '../../../../Assets/images/icon-wechselrichtertyp.svg';
import imgModul from '../../../../Assets/images/icon-modultyp.svg';
import { Col, Row, Form } from "react-bootstrap";
import './Komponenten.scss';

function Komponenten({isDashboardDetail}: {isDashboardDetail: boolean}) {
  return (
    <div className="komponenten">

      {isDashboardDetail && (
          <span className="fields">* Pflichtfelder</span>
      )}

      <Row className="primary-block">
        <Col md="6">
          <h2>
            <i>
              <Image src={imgModul} alt="Icon" />
            </i>
            Modultyp
          </h2>
          <div className="general-card">
            <Form>
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Select aria-label="Dropdown">
                      <option>Hersteller</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Brazil">Brazil</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Select aria-label="Dropdown">
                      <option>Typ</option>
                      <option value="India">India</option>
                      <option value="Russia">Russia</option>
                      <option value="Brazil">Brazil</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col md="6">
          <h2>
            <i>
              <Image src={imgWech} alt="Icon" />
            </i>
            Wechselrichtertyp
          </h2>
          <div className="general-card">
            <Form>
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Herstellername" />
                    <Form.Label>Herstellername</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Control type="text" placeholder="Typ" />
                    <Form.Label>Typ</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h2>
            <i>
              <Image src={imgSpeicher} alt="Icon" />
            </i>
            Speicher
          </h2>
          <div className="general-card">
            <Form>
            <Row>
                <Form.Label>Wallbox vorhanden?</Form.Label>
                <Form.Group className="form-block d-flex">
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    name={"wallbox"}
                    id={"Ja"}
                    label={"Ja"}
                  />
                </Col>
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    name={"wallbox"}
                    id={"Nein"}
                    label={"Nein"}
                  />
                </Col>
                </Form.Group>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Herstellername" />
                    <Form.Label>Herstellername</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block">
                    <Form.Control type="text" placeholder="Typ" />
                    <Form.Label>Typ</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Form.Group className="form-block mb-0">
                    <Form.Control
                      type="number"
                      placeholder="Kapazität in KWh"
                    />
                    <Form.Label>Kapazität in KWh</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col md="6">
          <h2>
            <i>
              <Image src={imgWallbox} alt="Icon" />
            </i>
            Wallbox
          </h2>
          <div className="general-card">
            <Form>
              <Row>
                    <Form.Label>Wallbox vorhanden?</Form.Label>
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    name={"wallbox"}
                    id={"ja"}
                    label={"Ja"}
                  />
                </Col>
                <Col md="2">
                  <Form.Check
                    type={"radio"}
                    name={"wallbox"}
                    id={"nein"}
                    label={"Nein"}
                  />
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Komponenten

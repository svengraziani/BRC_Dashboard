"use client";

import { Button, Col, Form, Row } from 'react-bootstrap';
import './informationen.scss';
import Image from 'next/image';
import imgLocation from '../../../../Assets/images/icon-allgemeine.svg';
import imgNotice from '../../../../Assets/images/icon-notizen.svg';
import imgTools from '../../../../Assets/images/icon-tools.svg';
import imgDatabase from '../../../../Assets/images/icon-database.svg';
import imgEigent from '../../../../Assets/images/icon-eigentuemer.svg';
import imgUser from '../../../../Assets/images/icon-multipleuser.svg';
import { BsTrash3 } from "react-icons/bs";

function Informationen() {
    return (
        <div className='informationen'>
            {/* General Information */}
            <Row className='primary-block'>
                <Col md="8">
                    <h2><i className='icon-loaction'><Image src={imgLocation} alt='Icon' /></i>Allgemeine
                        Angaben</h2>
                    <div className='general-card'>
                        <Form>
                            <Row>
                                <Col md="6">
                                    <Form.Group className='form-block'>
                                        <Form.Control type='text' placeholder='Anlagename' />
                                        <Form.Label>Anlagename</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group className='form-block'>
                                        <Form.Control type='text' placeholder='Alias-Name' />
                                        <Form.Label>Alias-Name</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Form.Group className='form-block'>
                                        <Form.Control type='text' placeholder='Standort: Straße' />
                                        <Form.Label>Standort: Straße</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md="6" className='d-md-flex'>
                                    <Col md="5" style={{ paddingRight: "10px" }}>
                                        <Form.Group className='form-block'>
                                            <Form.Control type='number' placeholder='Standort: Straße Nr.' />
                                            <Form.Label>Standort: Straße Nr.</Form.Label>
                                        </Form.Group>
                                    </Col>
                                    <Col md="7" style={{ paddingLeft: "10px" }}>
                                        <Form.Group className='form-block'>
                                            <Form.Control type='number' placeholder='Adresszusatz' />
                                            <Form.Label>Adresszusatz</Form.Label>
                                        </Form.Group>
                                    </Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Form.Group className='form-block'>
                                        <Form.Control type='text' placeholder='Standort: PLZ' />
                                        <Form.Label>Standort: PLZ</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md="6">
                                    <Form.Group className='form-block'>
                                        <Form.Control type='text' placeholder='Standort: Ort' />
                                        <Form.Label>Standort: Ort</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Form.Group className="form-block mb-0">
                                        <Form.Select aria-label="Dropdown">
                                            <option>Standort: Land</option>
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
                <Col md="4">
                    <h2><i className='icon-notice'><Image src={imgNotice} alt='Icon' /></i>Notizen</h2>
                    <div className='general-card'>
                        <div className='sub-card'>
                            <p>Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und
                                wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder
                                Handgloves, um Schriften zu testen.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* Owner facility */}
            <div className='primary-block'>
                <h2><i className='icon-loaction'><Image src={imgEigent} alt='Icon' /></i>Eigentümer Anlage</h2>
                <div className='general-card'>
                    <Row>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='text' placeholder='Firmenname' />
                                <Form.Label>Firmenname</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='text' placeholder='Vorname' />
                                <Form.Label>Vorname</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='text' placeholder='Nachname' />
                                <Form.Label>Nachname</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='email' placeholder='E-Mail' />
                                <Form.Label>E-Mail</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='tel' placeholder='Telefonnummer' />
                                <Form.Label>Telefonnummer</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='number' placeholder='Auftragsnummer' />
                                <Form.Label>Auftragsnummer</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='number' placeholder='Standort: PLZ' />
                                <Form.Label>Standort: PLZ</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='text' placeholder='Standort: Ort' />
                                <Form.Label>Standort: Ort</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className="form-block mb-0">
                                <Form.Select aria-label="Dropdown">
                                    <option>Standort: Land</option>
                                    <option value="India">India</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Brazil">Brazil</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* Craft business */}
            <div className='primary-block'>
                <h2><i className='icon-tools'><Image src={imgTools} alt='Icon' /></i>Handwerksbetrieb</h2>
                <div className='general-card'>
                    <Row>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='text' placeholder='Firmenname' />
                                <Form.Label>Firmenname</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='tel' placeholder='Telefonnummer' />
                                <Form.Label>Telefonnummer</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block'>
                                <Form.Control type='email' placeholder='Telefonnummer' />
                                <Form.Label>Telefonnummer</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='text' placeholder='Vorname' />
                                <Form.Label>Vorname</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='text' placeholder='Nachname' />
                                <Form.Label>Nachname</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* Electricity purchase */}
            <div className='primary-block'>
                <h2><i className='icon-database'><Image src={imgDatabase} alt='Icon' /></i>Strombezug</h2>
                <div className='general-card'>
                    <Row>
                        <Col xs>
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='number' placeholder='Kosten in €' />
                                <Form.Label>Kosten in €</Form.Label>
                            </Form.Group> 
                        </Col>
                    </Row>
                </div>
            </div>
            {/* Access rights */}
            <div className='primary-block'>
                <h2><i className='icon-database'><Image src={imgUser} alt='Icon' /></i>Zugriffsrechte</h2>
                <div className='general-card mb-3'>
                    <Row>
                        <Col md="10" className='d-md-flex gap-4'>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='number' placeholder='Vorname' />
                                <Form.Label>Vorname</Form.Label>
                            </Form.Group> 
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='number' placeholder='Nachname' />
                                <Form.Label>Nachname</Form.Label>
                            </Form.Group> 
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='email' placeholder='E-Mail' />
                                <Form.Label>E-Mail</Form.Label>
                            </Form.Group> 
                        </Col>
                        </Col>
                        <Col md="2" className='d-flex justify-content-end'>
                        <Button variant="trash"><i className="icon-trash"><BsTrash3 /></i></Button>
                        </Col>
                    </Row>
                </div>
                <div className='general-card'>
                    <Row>
                        <Col md="10" className='d-md-flex gap-4'>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='number' placeholder='Vorname' />
                                <Form.Label>Vorname</Form.Label>
                            </Form.Group> 
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='number' placeholder='Nachname' />
                                <Form.Label>Nachname</Form.Label>
                            </Form.Group> 
                        </Col>
                        <Col md="4">
                            <Form.Group className='form-block mb-0'>
                                <Form.Control type='email' placeholder='E-Mail' />
                                <Form.Label>E-Mail</Form.Label>
                            </Form.Group> 
                        </Col>
                        </Col>
                        <Col md="2" className='d-flex justify-content-end'>
                        <Button variant="trash"><i className="icon-trash"><BsTrash3 /></i></Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <Button>User hinzufügen</Button>
        </div>
    )
}

export default Informationen

"use client";

import Image from 'next/image';
import imgProfil from '../../Assets/images/icon-user.svg';
import './profil.scss';
import '../../css/sass/global.scss';
import { Button, Row, Col, Form } from 'react-bootstrap';

function Profil() {
  return (
    <div className='profile-wrap'>
      <div className='heading-wrap'>
        <h2><i className='icon-profil'>
            <Image src={imgProfil} alt='Icon' /> 
        </i>Mein Profil</h2>
        <div className='buttons-wrap'>
            <Button>Änderungen Speichern</Button>
            <Button>Account löschen</Button>
        </div>
      </div>
    <Form>
      <div className='profile-card'>
        <Row>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Firmenname" />
                <Form.Label>Firmenname</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Vorname" />
                <Form.Label>Vorname</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Nachname" />
                <Form.Label>Nachname</Form.Label>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="email" placeholder="E-Mail" />
                <Form.Label>E-Mail</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="tel" placeholder="Telefonnummer" />
                <Form.Label>Telefonnummer</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4"></Col>
        </Row>
        <Row>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Standort: Straße" />
                <Form.Label>Standort: Straße</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="number" placeholder="Standort: Straße Nr." />
                <Form.Label>Standort: Straße Nr.</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="number" placeholder="Adresszusatz" />
                <Form.Label>Adresszusatz</Form.Label>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="number" placeholder="Standort: PLZ" />
                <Form.Label>Standort: PLZ</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
                <Form.Control type="text" placeholder="Standort: Ort" />
                <Form.Label>Standort: Ort</Form.Label>
                </Form.Group>
            </Col>
            <Col md="4">
                <Form.Group className='form-block'>
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
      <Row>
        <Col md="2">
        <Button>Passwort ändern</Button>
        </Col>
      </Row>
    </Form>
    <div className="notice">
        <div className='notice-primary'>
        <span className='notice-head'>HINWEIS</span>
        </div>
        <p>Feld "Firmenname" ist hier noch enthalten, kann aber entfernt werden falls er nicht angezeigt werden 
        soll</p>
    </div>
    </div>
  )
}

export default Profil

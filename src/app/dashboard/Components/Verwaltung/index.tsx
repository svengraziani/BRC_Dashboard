"use client";

import { Col, Form, Row } from 'react-bootstrap';
import './Verwaltung.scss';
import Image from "next/image";
import imgWech from '../../../../Assets/images/icon-wechselrichtertyp.svg';
import { IoInformationCircleOutline } from "react-icons/io5";

function Verwaltung() {
  return (
    <div className='verwaltung'>
        <h2><i></i>Gateway 1 (1 von 2)<i></i></h2>
      <Row>
        <Col md="6" className='pe-0'>
            <div className="gateway-card">
                <h3><i className="icon"><Image src={imgWech} alt='Icon' /></i>Gateway Daten</h3>
                <Form>
                    <Form.Group className='form-block'>
                        <Form.Control type='number' placeholder='Gateway ID'></Form.Control>
                        <Form.Label>Gateway ID</Form.Label>
                    </Form.Group>
                    <Form.Group className='form-block'>
                        <Form.Control type='number' placeholder='Anzahl Strings'></Form.Control>
                        <Form.Label>Anzahl Strings</Form.Label>
                    </Form.Group>
                    <Form.Group className='form-block'>
                        <Form.Control type='number' placeholder='Anzahl Optimierer String 1'></Form.Control>
                        <Form.Label>Anzahl Optimierer String 1</Form.Label>
                    </Form.Group>
                    <Form.Group className='form-block'>
                        <Form.Control type='number' placeholder='Anzahl Optimierer String 2'></Form.Control>
                        <Form.Label>Anzahl Optimierer String 2</Form.Label>
                    </Form.Group>
                    <Form.Group className='form-block mb-0'>
                        <Form.Control type='number' placeholder='Anzahl Optimierer String 3'></Form.Control>
                        <Form.Label>Anzahl Optimierer String 3</Form.Label>
                    </Form.Group>
                </Form>
                <p><i className="icon-tooltip"><IoInformationCircleOutline /></i>Die Anzahl der Strings und 
                Gateways sowie dazugehörige Bluetooth-Verbindungen können nur in der mobile App 
                verändert/eingesehen werden.</p>
            </div>
        </Col>
        <Col md="6" className='ps-0'>
            <div className="gateway-card"></div>
        </Col>
      </Row>
    </div>
  )
}

export default Verwaltung

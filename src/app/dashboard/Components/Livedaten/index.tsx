"use client";

import { Button, Col, Row } from 'react-bootstrap'
import './Livedaten.scss';
import Image from 'next/image';
import circleImg from '../../../..//Assets/images/icon-circle.svg';
import imgCheck from '../../../..//Assets/images/icon-checkmark.svg';

function Livedaten() {
  return (
    <div className='livedaten'>
      <Row>
        <Col md="8">
            <h2><i></i>Gateway 1 (1 von 2)<i></i></h2>
            <div className='gateway-card'>
              <ul className='d-md-flex justify-content-center'>
                <li><Button variant='string'>String 1</Button></li>
                <li><Button variant='string'>String 2</Button></li>
                <li><Button variant='string'>String 3</Button></li>
              </ul>
            </div>
        </Col>
        <Col md="4">
          <div className='general-card'>
            <div className='general-wrap'>
            <div className='kw-outer'>
            <div className='kw-inner'>
              <span className='number'>9,73</span>
              <span className='kilo-watt'>kW</span>
            </div>
            </div>
            <span className='performance d-flex align-items-center gap-2'>Aktuelle Anlagenleistung<i><Image src={circleImg} alt='Icon' /></i></span>
            <span className='energy d-flex align-items-center gap-2'>Maximale Energieausbeute<i><Image src={imgCheck} alt='Icon' /></i></span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Livedaten
